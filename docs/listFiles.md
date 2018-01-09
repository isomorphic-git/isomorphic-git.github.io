---
title: listFiles
sidebar_label: listFiles
---

List all the files in the git index

| param                   | type, default            | description                                                                                                                                                         |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](index.html#dir-vs-gitdir) directory path, and optionally the [git directory](index.html#dir-vs-gitdir) path |
| return                  | Promise<Array<string>>   | Resolves successfully with an array of branch names                                                                                                                 |

```js
let repo = {fs, dir: '<@.@>'}
let files = await git.listFiles(repo)
console.log(files)
```