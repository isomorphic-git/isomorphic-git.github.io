---
title: branch
sidebar_label: branch
---

Create a new branch

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**                 | string                   | Which branch to checkout.                                                                                                                           |
| return                  | Promise\<void\>          | Resolves successfully when filesystem operations are complete   

```js live
let repo = {fs, dir: '$input((.))'}
await git.branch({
  ...repo,
  ref: '$input((develop))'
})
console.log('done')
```