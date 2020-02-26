export default index;
export type GitHttpRequest = {
    /**
     * - The URL to request
     */
    url: string;
    /**
     * - The HTTP method to use
     */
    method?: string;
    /**
     * - Headers to include in the HTTP request
     */
    headers?: {
        [x: string]: string;
    };
    /**
     * - An async iterator of Uint8Arrays that make up the body of POST requests
     */
    body?: AsyncIterableIterator<Uint8Array>;
    /**
     * - If your `http` plugin needs access to other plugins, it can do so via `git.cores.get(core)`
     */
    core?: string;
    /**
     * - If your `http` plugin emits events, it can do so via `emitter.emit()`
     */
    emitter?: any;
    /**
     * - The `emitterPrefix` passed by the user when calling a function. If your plugin emits events, prefix the event name with this.
     */
    emitterPrefix?: string;
};
export type GitHttpResponse = {
    /**
     * - The final URL that was fetched after any redirects
     */
    url: string;
    /**
     * - The HTTP method that was used
     */
    method?: string;
    /**
     * - HTTP response headers
     */
    headers?: {
        [x: string]: string;
    };
    /**
     * - An async iterator of Uint8Arrays that make up the body of the response
     */
    body?: AsyncIterableIterator<Uint8Array>;
    /**
     * - The HTTP status code
     */
    statusCode: number;
    /**
     * - The HTTP status message
     */
    statusMessage: string;
};
declare namespace index {
    export { request };
}
/**
 * @typedef {Object} GitHttpRequest
 * @property {string} url - The URL to request
 * @property {string} [method='GET'] - The HTTP method to use
 * @property {Object<string, string>} [headers={}] - Headers to include in the HTTP request
 * @property {AsyncIterableIterator<Uint8Array>} [body] - An async iterator of Uint8Arrays that make up the body of POST requests
 * @property {string} [core] - If your `http` plugin needs access to other plugins, it can do so via `git.cores.get(core)`
 * @property {GitEmitterPlugin} [emitter] - If your `http` plugin emits events, it can do so via `emitter.emit()`
 * @property {string} [emitterPrefix] - The `emitterPrefix` passed by the user when calling a function. If your plugin emits events, prefix the event name with this.
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
 * HttpClient
 *
 * @param {GitHttpRequest} request
 * @returns {Promise<GitHttpResponse>}
 */
export function request({ onProgress, url, method, headers, body, }: GitHttpRequest): Promise<GitHttpResponse>;
