---
title: deleteRemote
sidebar_label: deleteRemote
---

Removes the local config entry for a given remote

| param           | type [= default] | description                                                                                                    |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string   | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **remote**      | string           | The name of the remote to delete                                                                               |
| return          | Promise\<void\>  | Resolves successfully when filesystem operations are complete                                                  |

```js live
await git.deleteRemote({ dir: '$input((/))', remote: '$input((upstream))' })
console.log('done')
```
