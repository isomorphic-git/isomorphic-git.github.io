---
title: listRemotes
sidebar_label: listRemotes
---

List remotes

| param                   | type [= default]                                  | description                                                                                                                                         |
| ----------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string                          | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| return                  | Promise\<Array\<{remote: string, url: string}\>\> | Resolves successfully with an array of `{remote, url}` objects                                                                                      |

```js live
let repo = {fs, dir: '$input((.))'}
let remotes = await git.listRemotes(repo)
console.log(remotes)
```
