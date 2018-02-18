---
title: init
sidebar_label: init
---

Initialize a new repository

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| return                  | Promise\<void\>          | Resolves successfully when filesystem operations are complete                                                                                       |

```
let repo = {fs, dir: '$input((.))'}
await git.init(repo)
console.log('done')
```