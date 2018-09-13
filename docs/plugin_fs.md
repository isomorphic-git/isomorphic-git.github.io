---
title: 'fs' plugin
sidebar_label: fs
---

You need to initialize `isomorphic-git` with a file system before you can do pretty much anything.
Here is how:

```js
// Using require() in Node.js
const fs = require('fs')
const git = require('isomorphic-git')
git.plugins.set('fs', fs)

// using ES6 modules
import fs from 'fs'
import { plugins } from 'isomorphic-git'
plugins.set('fs', fs)
```

In the browser it's more involved because there's no standard 'fs' module.
Hop over to the [Browser QuickStart](./guide-browser.md) to see how that's done.

> Note: only one `fs` plugin can be registered at a time.

### Implementing your own `fs` plugin


An `fs` plugin must implement the following subset of node's `fs` module:
  - [fs.readFile(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
  - [fs.writeFile(file, data[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
  - [fs.unlink(path, callback)](https://nodejs.org/api/fs.html#fs_fs_unlink_path_callback)
  - [fs.readdir(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
  - [fs.mkdir(path[, mode], callback)](https://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback)
  - [fs.rmdir(path, callback)](https://nodejs.org/api/fs.html#fs_fs_rmdir_path_callback)
  - [fs.stat(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_stat_path_options_callback)
  - [fs.lstat(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_lstat_path_options_callback)
  - [fs.readlink(path[, options], callback)](https://nodejs.org/api/fs.html#fs_fs_readlink_path_options_callback)
  - [fs.symlink(target, path[, type], callback)](https://nodejs.org/api/fs.html#fs_fs_symlink_target_path_type_callback)
