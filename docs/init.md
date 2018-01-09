---
title: init
sidebar_label: init
---

Initialize a new repository

| param                   | type, default            | description                                                                                                                                                         |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](index.html#dir-vs-gitdir) directory path, and optionally the [git directory](index.html#dir-vs-gitdir) path |
| return                  | Promise<void>            | Resolves successfully when filesystem operations are complete                                                                                                       |

```
let repo = {fs, dir: '<@.@>'}
await git.init(repo)
console.log('done')
```