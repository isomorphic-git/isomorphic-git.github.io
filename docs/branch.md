---
title: branch
sidebar_label: branch
---

Create a new branch

| param           | type [= default] | description                                                                                                    |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string   | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**         | string           | What to name the branch                                                                                        |
| return          | Promise\<void\>  | Resolves successfully when filesystem operations are complete                                                  |

```js live
await git.branch({ dir: '$input((/))', ref: '$input((develop))' })
console.log('done')
```
