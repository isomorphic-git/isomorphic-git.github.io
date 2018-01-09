---
title: add
sidebar_label: add
---

Add a file to the git index (aka staging area)

| param                   | type, default            | description                                                                                                                                                         |
| ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](index.html#dir-vs-gitdir) directory path, and optionally the [git directory](index.html#dir-vs-gitdir) path |
| **filepath**            | string                   | The path to the file to add to the index                                                                                                                            |
| return                  | Promise<void>            | Resolves successfully once the git index has been updated                                                                                                           |

 ```js
 let repo = {fs, dir: '<@.@>'}
 await new Promise((resolve, reject) => fs.writeFile(
   '<@README.md@>',
   `<<@# TEST@>>`,
   (err) => err ? reject(err) : resolve()
 ))
 await git.add({...repo, filepath: '<@README.md@>'})
 console.log('done')
 ```