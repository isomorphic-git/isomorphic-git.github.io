---
title: add
sidebar_label: add
---

Add a file to the git index (aka staging area)

| param           | type [= default] | description                                                                                                    |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string   | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **filepath**    | string           | The path to the file to add to the index                                                                       |
| return          | Promise\<void\>  | Resolves successfully once the git index has been updated                                                      |

 ```js live
 await new Promise((resolve, reject) => fs.writeFile(
   '$input((/README.md))',
   `$textarea((# TEST))`,
   (err) => err ? reject(err) : resolve()
 ))
 await git.add({ dir: '$input((/))', filepath: '$input((README.md))' })
 console.log('done')
 ```