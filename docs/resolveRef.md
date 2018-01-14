---
title: resolveRef
sidebar_label: resolveRef
---

Get the value of a symbolic ref or resolve a ref to its object id.

| param                   | type, default            | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**                 | string                   | The ref to resolve                                                                                                                                  |
| depth                   | number                   | How many symbolic references to follow before returning                                                                                             |
| return                  | Promise\<string\>        | Resolves successfully with a SHA or the value of a symbolic ref                                                                                     |

```js
let repo = {fs, dir: '<@.@>'}
let currentCommit = await git.resolveRef({...repo, ref: '<@HEAD@>'})
console.log(currentCommit)
let currentBranch = await git.resolveRef({...repo, ref: '<@HEAD@>', depth: 1})
console.log(currentBranch)
```