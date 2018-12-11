---
title: deleteTag
sidebar_label: deleteTag
---

Deletes a local branch

| param           | type [= default] | description                                                                                                    |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string   | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**         | string           | The tag to delete                                                                                              |
| return          | Promise\<void\>  | Resolves successfully when filesystem operations are complete                                                  |

```js live
await git.deleteTag({ dir: '$input((.))', ref: '$input((test-tag))' })
console.log('done')
```
