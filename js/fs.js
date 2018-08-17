let fsOptions = {
  fs: 'IndexedDB',
  options: {}
}

BrowserFS.configure(fsOptions, function (err) {
  if (err) return console.log(err)

  window.fs = BrowserFS.BFSRequire('fs')

  // Initialize isomorphic-git with our new file system
  git.plugins.set('fs', fs)

  // make a Promisified version for convenience
  window.pfs = pify(fs) 

  window.dir = 'tutorial'
})
