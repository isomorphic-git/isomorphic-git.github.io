---
title: listRemotes
sidebar_label: listRemotes
---

List remotes

| param           | type [= default]                                  | description                                                                                                    |
| --------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule                                          | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string                                    | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| return          | Promise\<Array\<{remote: string, url: string}\>\> | Resolves successfully with an array of `{remote, url}` objects                                                 |

```js live
let remotes = await git.listRemotes({ dir: '$input((.))' })
console.log(remotes)
```
