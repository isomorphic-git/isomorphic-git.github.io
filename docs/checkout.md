---
title: checkout
sidebar_label: checkout
---

Checkout a branch

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**                 | string                   | Which branch to checkout.                                                                                                                           |
| remote                  | string = 'origin'        | Which remote repository to use.                                                                                                                     |
| return                  | Promise\<void\>          | Resolves successfully when filesystem operations are complete                                                                                       |

If the branch already exists it will check out that branch. Otherwise, it will create a new remote tracking branch set to track the remote branch of that name.

Example code:

```js
let repo = {fs, dir: '<@.@>'}
await git.checkout({...repo, ref: '<@master@>'})
console.log('done')
```