---
title: deleteBranch
sidebar_label: deleteBranch
---

Deletes a local branch

| param           | type [= default] | description                                                                                                    |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string   | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**         | string           | The branch to delete                                                                                           |
| return          | Promise\<void\>  | Resolves successfully when filesystem operations are complete                                                  |

> Note: This only deletes loose branches - it should be fixed in the future to delete packed branch names as well.

```js live
await git.deleteBranch({ dir: '$input((/))', ref: '$input((local-branch))' })
console.log('done')
```
