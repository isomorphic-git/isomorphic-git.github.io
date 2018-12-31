---
title: expandOid
sidebar_label: expandOid
---

Expand and resolve a short oid into a full oid

| param           | type, default     | description                                                                                                    |
| --------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule          | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string    | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **oid**         | string            | The shortened oid prefix to expand (like "0414d2a")                                                            |
| return          | Promise\<string\> | Resolves successfully with the full oid (like "0414d2a286d7bbc7a4a326a61c1f9f888a8ab87f")                      |

```js live
let oid = await git.expandOid({ dir: '$input((/))', oid: '$input((0414d2a))'})
console.log(oid)
```