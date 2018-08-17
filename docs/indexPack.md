---
title: indexPack
sidebar_label: indexPack
---

Create the .idx file for a given .pack file

| param           | type [= default] | description                                                                                                    |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string   | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **filepath**    | string           | The path to the .pack file to index.                                                                           |
| return          | Promise\<void\>  | Resolves when filesystem operations are complete                                                               |

```js live
await git.indexPack({ dir: '$input((.))', filepath: '$input((pack-9cbd243a1caa4cb4bef976062434a958d82721a9.pack))' })
console.log('done')
```