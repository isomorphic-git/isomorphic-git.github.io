---
title: remove
sidebar_label: remove
---

Remove a file from the git index (aka staging area)

Note that this does NOT delete the file in the working directory.

| param                   | type, default            | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **filepath**            | string                   | The path to the file to remove from the index                                                                                                       |
| return                  | Promise\<void\>          | Resolves successfully once the git index has been updated                                                                                           |

```js
let repo = {fs, dir: '$input((.))'}
await git.remove({...repo, filepath: '$input((README.md))'})
console.log('done')
```
