---
title: remove
sidebar_label: remove
---

Remove a file from the git index (aka staging area)

Note that this does NOT delete the file in the working directory.

| param                   | type, default            | description                                                                                                                                                         |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](index.html#dir-vs-gitdir) directory path, and optionally the [git directory](index.html#dir-vs-gitdir) path |
| **filepath**            | string                   | The path to the file to remove from the index                                                                                                                       |
| return                  | Promise<void>            | Resolves successfully once the git index has been updated                                                                                                           |

```js
let repo = {fs, dir: '<@.@>'}
await git.remove({...repo, filepath: '<@README.md@>'})
console.log('done')
```
