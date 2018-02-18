---
title: listFiles
sidebar_label: listFiles
---

List all the files in the git index

| param                   | type [= default]           | description                                                                                                                                         |
| ----------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string   | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| return                  | Promise\<Array\<string\>\> | Resolves successfully with an array of branch names                                                                                                 |

```js
let repo = {fs, dir: '$input((.))'}
let files = await git.listFiles(repo)
console.log(files)
```