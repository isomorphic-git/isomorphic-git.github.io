---
title: findRoot
sidebar_label: findRoot
---

Find the root git directory

| param           | type [= default] | description                                                                                               |
| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md). |
| **filepath**    | string           | The file directory to start searching in.                                                                 |
| return          | Promise\<void\>  | Resolves successfully when filesystem operations are complete                                             |
| throws          | Error            | Error('Unable to find git root')                                                                          |

Starting at `filepath`, walks upward until it finds a directory that contains a subdirectory called '.git'.

```js live
let gitroot = await git.findRoot({
  filepath: '$input((/path/to/some/gitrepo/path/to/some/file.txt))'
})
console.log(gitroot) // '/path/to/some/gitrepo'
```
