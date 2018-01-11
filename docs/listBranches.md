---
title: listBranches
sidebar_label: listBranches
---

List all local branches

| param                   | type [= default]           | description                                                                                                                                         |
| ----------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string   | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| return                  | Promise\<Array\<string\>\> | Resolves successfully with an array of branch names                                                                                                 |

```js
let repo = {fs, dir: '<@.@>'}
let branches = await git.listBranches(repo)
console.log(branches)
```