---
title: checkout
sidebar_label: checkout
---

Checkout a branch

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| remote                  | string = 'origin'        | Which remote repository to use.                                                                                                                     |
| ref                     | string = undefined       | Which branch to checkout. By default this is the designated "main branch" of the remote repository.                                                 |
| return                  | Promise\<void\>          | Resolves successfully when filesystem operations are complete                                                                                       |

```js
let repo = {fs, dir: '<@.@>'}
await git.checkout({...repo, ref: '<@master@>'})
console.log('done')
```