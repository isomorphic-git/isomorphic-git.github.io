---
title: listBranches
sidebar_label: listBranches
---

List all local branches

| param                   | type, default            | description                                                                                                                                                         |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](index.html#dir-vs-gitdir) directory path, and optionally the [git directory](index.html#dir-vs-gitdir) path |
| return                  | Promise<Array<string>>   | Resolves successfully with an array of branch names                                                                                                                 |

```js
let repo = {fs, dir: '<@.@>'}
let branches = await git.listBranches(repo)
console.log(branches)
```