---
title: remove
sidebar_label: remove
---

Remove a file from the git index (aka staging area)

Note that this does NOT delete the file in the working directory.

| param           | type, default   | description                                                                                                    |
| --------------- | --------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule        | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string  | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **filepath**    | string          | The path to the file to remove from the index                                                                  |
| return          | Promise\<void\> | Resolves successfully once the git index has been updated                                                      |

```js live
await git.remove({ dir: '$input((.))', filepath: '$input((README.md))' })
console.log('done')
```
