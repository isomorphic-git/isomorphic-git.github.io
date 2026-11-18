import get from 'simple-get';
import { PassThrough } from 'stream';

/**
 * @typedef {Object} GitProgressEvent
 * @property {string} phase
 * @property {number} loaded
 * @property {number} total
 */

/**
 * @callback ProgressCallback
 * @param {GitProgressEvent} progress
 * @returns {void | Promise<void>}
 */

/**
 * @typedef {Object} GitHttpRequest
 * @property {string} url - The URL to request
 * @property {string} [method='GET'] - The HTTP method to use
 * @property {Object<string, string>} [headers={}] - Headers to include in the HTTP request
 * @property {Object} [agent] - An HTTP or HTTPS agent that manages connections for the HTTP client (Node.js only)
 * @property {AsyncIterableIterator<Uint8Array>} [body] - An async iterator of Uint8Arrays that make up the body of POST requests
 * @property {ProgressCallback} [onProgress] - Reserved for future use (emitting `GitProgressEvent`s)
 * @property {AbortSignal} [signal] - Signal to abort the HTTP request
 * @property {Object} [fetchOptions={}] - Additional options to pass to fetch (Web) or simple-get (Node)
 */

/**
 * @typedef {Object} GitHttpResponse
 * @property {string} url - The final URL that was fetched after any redirects
 * @property {string} [method] - The HTTP method that was used
 * @property {Object<string, string>} [headers] - HTTP response headers
 * @property {AsyncIterableIterator<Uint8Array>} [body] - An async iterator of Uint8Arrays that make up the body of the response
 * @property {number} statusCode - The HTTP status code
 * @property {string} statusMessage - The HTTP status message
 */

/**
 * @callback HttpFetch
 * @param {GitHttpRequest} request
 * @returns {Promise<GitHttpResponse>}
 */

/**
 * @typedef {Object} HttpClient
 * @property {HttpFetch} request
 */

// Convert a value to an Async Iterator
// This will be easier with async generator functions.
function fromValue(value) {
  let queue = [value];
  return {
    next() {
      return Promise.resolve({ done: queue.length === 0, value: queue.pop() })
    },
    return() {
      queue = [];
      return {}
    },
    [Symbol.asyncIterator]() {
      return this
    },
  }
}

function getIterator(iterable) {
  if (iterable[Symbol.asyncIterator]) {
    return iterable[Symbol.asyncIterator]()
  }
  if (iterable[Symbol.iterator]) {
    return iterable[Symbol.iterator]()
  }
  if (iterable.next) {
    return iterable
  }
  return fromValue(iterable)
}

// Currently 'for await' upsets my linters.
async function forAwait(iterable, cb) {
  const iter = getIterator(iterable);
  while (true) {
    const { value, done } = await iter.next();
    if (value) await cb(value);
    if (done) break
  }
  if (iter.return) iter.return();
}

function asyncIteratorToStream(iter) {
  const stream = new PassThrough();
  setTimeout(async () => {
    await forAwait(iter, chunk => stream.write(chunk));
    stream.end();
  }, 1);
  return stream
}

async function collect(iterable) {
  let size = 0;
  const buffers = [];
  // This will be easier once `for await ... of` loops are available.
  await forAwait(iterable, value => {
    buffers.push(value);
    size += value.byteLength;
  });
  const result = new Uint8Array(size);
  let nextIndex = 0;
  for (const buffer of buffers) {
    result.set(buffer, nextIndex);
    nextIndex += buffer.byteLength;
  }
  return result
}

// Convert a Node stream to an Async Iterator
function fromNodeStream(stream) {
  // Use native async iteration if it's available.
  const asyncIterator = Object.getOwnPropertyDescriptor(
    stream,
    Symbol.asyncIterator
  );
  if (asyncIterator && asyncIterator.enumerable) {
    return stream
  }
  // Author's Note
  // I tried many MANY ways to do this.
  // I tried two npm modules (stream-to-async-iterator and streams-to-async-iterator) with no luck.
  // I tried using 'readable' and .read(), and .pause() and .resume()
  // It took me two loooong evenings to get to this point.
  // So if you are horrified that this solution just builds up a queue with no backpressure,
  // and turns Promises inside out, too bad. This is the first code that worked reliably.
  let ended = false;
  const queue = [];
  let defer = {};
  stream.on('data', chunk => {
    queue.push(chunk);
    if (defer.resolve) {
      defer.resolve({ value: queue.shift(), done: false });
      defer = {};
    }
  });
  stream.on('error', err => {
    if (defer.reject) {
      defer.reject(err);
      defer = {};
    }
  });
  stream.on('end', () => {
    ended = true;
    if (defer.resolve) {
      defer.resolve({ done: true });
      defer = {};
    }
  });
  return {
    next() {
      return new Promise((resolve, reject) => {
        if (queue.length === 0 && ended) {
          return resolve({ done: true })
        } else if (queue.length > 0) {
          return resolve({ value: queue.shift(), done: false })
        } else if (queue.length === 0 && !ended) {
          defer = { resolve, reject };
        }
      })
    },
    return() {
      stream.removeAllListeners();
      if (stream.destroy) stream.destroy();
    },
    [Symbol.asyncIterator]() {
      return this
    },
  }
}

/**
 * HttpClient
 *
 * @param {GitHttpRequest} request
 * @returns {Promise<GitHttpResponse>}
 */
async function request({
  onProgress,
  url,
  method = 'GET',
  headers = {},
  agent,
  fetchOptions = {},
  body,
  signal,
}) {
  // If we can, we should send it as a single buffer so it sets a Content-Length header.
  if (body && Array.isArray(body)) {
    // @ts-expect-error
    body = Buffer.from(await collect(body));
  } else if (body) {
    // @ts-expect-error
    body = asyncIteratorToStream(body);
  }
  const { followRedirects = true, maxRedirects = 10, ...options } = fetchOptions;
  /** @type {RedirectableRequest} */
  let next = { url, method: method.toUpperCase(), headers, body };
  for (let redirects = 0; ; redirects++) {
    const res = await send({
      ...options,
      ...next,
      agent,
      signal: signal ?? options.signal,
    });
    const location = res.headers.location;
    if (
      !followRedirects ||
      res.statusCode < 300 ||
      res.statusCode >= 400 ||
      !location
    ) {
      return toResponse(res)
    }
    // Discard the redirect body. simple-get has already wrapped it in a
    // decompressor, so a malformed body must not become an unhandled error.
    res.on('error', () => {});
    res.resume();
    if (redirects >= maxRedirects) throw new Error('too many redirects')
    next = redirectRequest(next, res.statusCode, location);
    // simple-get builds a body from `form` on every call; like its own
    // redirect handling, send it only with the first request.
    delete options.form;
  }
}

/**
 * @typedef {Object} RedirectableRequest
 * @property {string} url
 * @property {string} method
 * @property {Object<string, string>} headers
 * @property {any} body
 */

/**
 * Follows a redirect the way simple-get did, except that credentials are scoped
 * to an origin (scheme, host and port) rather than to a hostname, like curl,
 * which canonical git uses. simple-get kept the Authorization header when a
 * redirect changed only the port or the scheme.
 *
 * @param {RedirectableRequest} previous
 * @param {number} statusCode
 * @param {string} location
 * @returns {RedirectableRequest}
 */
function redirectRequest(previous, statusCode, location) {
  const url = new URL(location, previous.url);
  const sameOrigin = url.origin === new URL(previous.url).origin;
  let { method, body } = previous;
  const dropped = ['host'];
  if (!sameOrigin) dropped.push('authorization', 'cookie');
  // Like curl and RFC 7231 §6.4.4, a 303 always turns into a GET; a 301 or 302
  // turns only a POST into one.
  if (
    (statusCode === 303 && method !== 'GET' && method !== 'HEAD') ||
    (method === 'POST' && (statusCode === 301 || statusCode === 302))
  ) {
    method = 'GET';
    body = undefined;
    dropped.push('content-length', 'content-type');
  } else if (body && !Buffer.isBuffer(body)) {
    // A streamed body has been read by the first request and would be resent
    // empty.
    throw new Error(
      `cannot follow a ${statusCode} redirect: the request body is a stream and cannot be replayed`
    )
  }
  /** @type {Object<string, string>} */
  const headers = {};
  for (const [name, value] of Object.entries(previous.headers)) {
    if (!dropped.includes(name.toLowerCase())) headers[name] = value;
  }
  return { url: url.href, method, headers, body }
}

/**
 * @param {object} options
 * @returns {Promise<any>}
 */
function send(options) {
  return new Promise((resolve, reject) => {
    get({ ...options, followRedirects: false }, (err, res) =>
      err ? reject(err) : resolve(res)
    );
  })
}

/**
 * @param {any} res
 * @returns {GitHttpResponse}
 */
function toResponse(res) {
  return {
    url: res.url,
    method: res.method,
    statusCode: res.statusCode,
    statusMessage: res.statusMessage,
    body: fromNodeStream(res),
    headers: res.headers,
  }
}

var index = { request };

export default index;
export { request };
