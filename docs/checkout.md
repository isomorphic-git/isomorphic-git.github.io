---
title: checkout
sidebar_label: checkout
---

Checkout a branch

| param                | type [= default]         | description                                                                                                    |
| -------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated]      | FSModule                 | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir      | string, string           | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**              | string                   | Which branch to checkout. |
| pattern              | string = null            | Filter the results to only those filepath matches a glob pattern. |
| remote               | string = 'origin'        | Which remote repository to use. | 
| return               | Promise\<void\>          | Resolves successfully when filesystem operations are complete. |

If the branch already exists it will check out that branch. Otherwise, it will create a new remote tracking branch set to track the remote branch of that name.

Example code:

```js live
// checkout the master branch
await git.checkout({ dir: '$input((/))', ref: '$input((master))' })
console.log('done')
```

```js live
// checkout only JSON and Markdown files from master branch
await git.checkout({ dir: '$input((/))', ref: '$input((master))', pattern: '*.{json,md}' })
console.log('done')
```
