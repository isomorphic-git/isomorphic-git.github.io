---
title: addRemote
sidebar_label: addRemote
---

Add or modify a remote to the .git/config file

| param           | type [= default] | description                                                                                                    |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string   | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **remote**      | string           | What to name the remote                                                                                        |
| **url**         | string           | The URL of the remote                                                                                          |
| force           | boolean = false  | Instead of throwing an error if a remote named `remote` already exists, overwrite the existing remote.         |
| return          | Promise\<void\>  | Resolves successfully when filesystem operations are complete                                                  |

```js live
await git.addRemote({ dir: '$input((.))', remote: '$input((upstream))', url: '$input((https://github.com/isomorphic-git/isomorphic-git))' })
console.log('done')
```
