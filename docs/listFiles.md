---
title: listFiles
sidebar_label: listFiles
---

List all the files in the git index or a commit

| param                   | type [= default]           | description                                                                                                                                         |
| ----------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string   | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| ref                     | string = undefined         | Return a list of all the files in the commit at `ref` instead of the files currently in the git index (aka staging area)                            |
| return                  | Promise\<Array\<string\>\> | Resolves successfully with an array of filepaths                                                                                                    |

> Note: This function is efficient for listing the files in the staging area, but listing all the files in a commit requires recursively walking through the git object store.
> If you do not require a complete list of every file, better can be achieved by using [readObject](./readObject.html) directly and ignoring subdirectories you don't care about.

```js live
let repo = {fs, dir: '$input((.))'}
// All the files in the previous commit
let files = await git.listFiles({...repo, ref: '$input((HEAD))'})
console.log(files)
// All the files in the current staging area
files = await git.listFiles(repo)
console.log(files)
```
