---
title: isDescendent
sidebar_label: isDescendent
---

Check whether a git commit is descended from another

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, dir, **gitdir** | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **oid**                 | string                   | The descendent commit                                                                                                                               |
| **ancestor**            | string                   | The (proposed) ancestor commit                                                                                                                      |
| depth                   | number = -1              | Maximum depth to search before giving up. -1 means no maximum depth.                                                                                |
| return                  | Promise\<boolean\>       | Resolves to true if `oid` is a descendent of `ancestor`                                                                                             |

```js live
let repo = {fs, dir: '$input((.))'}
let oid = await git.resolveRef({...repo, ref: '$input((master))'})
let ancestor = await git.resolveRef({...repo, ref: '$input((v0.20.0))'})
console.log(oid, ancestor)
await git.isDescendent({...repo, oid, ancestor, depth: $input((-1))})
```