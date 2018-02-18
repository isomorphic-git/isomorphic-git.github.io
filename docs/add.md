---
title: add
sidebar_label: add
---

Add a file to the git index (aka staging area)

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **filepath**            | string                   | The path to the file to add to the index                                                                                                            |
| return                  | Promise\<void\>          | Resolves successfully once the git index has been updated                                                                                           |

 ```js
 let repo = {fs, dir: '$input((.))'}
 await new Promise((resolve, reject) => fs.writeFile(
   '$input((README.md))',
   `$textarea((# TEST))`,
   (err) => err ? reject(err) : resolve()
 ))
 await git.add({...repo, filepath: '$input((README.md))'})
 console.log('done')
 ```