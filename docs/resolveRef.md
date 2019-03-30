---
title: resolveRef
sidebar_label: resolveRef
---

Get the value of a symbolic ref or resolve a ref to its SHA-1 object id.

| param           | type, default     | description                                                                                                    |
| --------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule          | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string    | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**         | string            | The ref to resolve                                                                                             |
| depth           | number            | How many symbolic references to follow before returning                                                        |
| return          | Promise\<string\> | Resolves successfully with a SHA-1 object id or the value of a symbolic ref                                    |

```js live
let currentCommit = await git.resolveRef({ dir: '$input((/))', ref: '$input((HEAD))' })
console.log(currentCommit)
let currentBranch = await git.resolveRef({ dir: '$input((/))', ref: '$input((HEAD))', depth: $input((2)) })
console.log(currentBranch)
```