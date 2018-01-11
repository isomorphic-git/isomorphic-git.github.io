---
title: findRoot
sidebar_label: findRoot
---

Find the root git directory

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **filepath**            | string                   | The file directory to start searching in.                                                                                                           |
| return                  | Promise\<void\>          | Resolves successfully when filesystem operations are complete                                                                                       |
| throws                  | Error                    | Error('Unable to find git root')                                                                                                                    |

Starting at `filepath`, walks upward until it finds a directory that contains a subdirectory called '.git'.

```js
let gitroot = await git.findRoot({
  fs,
  filepath: '<@/path/to/some/gitrepo/path/to/some/file.txt@>'
})
console.log(gitroot) // '/path/to/some/gitrepo'
```