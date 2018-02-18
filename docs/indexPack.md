---
title: indexPack
sidebar_label: indexPack
---

Create the .idx file for a given .pack file

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **filepath**            | string                   | The path to the .pack file to index.                                                                                                                |
| return                  | Promise\<void\>          | Resolves when filesystem operations are complete                                                                                                    |

```js
let repo = {fs, dir: '$input((.))'}
await git.indexPack({...repo, filepath: '$input((pack-9cbd243a1caa4cb4bef976062434a958d82721a9.pack))'})
console.log('done')
```