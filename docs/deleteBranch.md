---
title: deleteBranch
sidebar_label: deleteBranch
---

Delete a local branch

| param           | type [= default]          | description                                                                                               |
| --------------- | ------------------------- | --------------------------------------------------------------------------------------------------------- |
| core            | string = 'default'        | The plugin core identifier to use for plugin injection                                                    |
| fs [deprecated] | FileSystem                | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md). |
| dir             | string                    | The [working tree](dir-vs-gitdir.md) directory path                                                       |
| **gitdir**      | string = join(dir,'.git') | The [git directory](dir-vs-gitdir.md) path                                                                |
| **ref**         | string                    | The branch to delete                                                                                      |
| return          | Promise\<void\>           | Resolves successfully when filesystem operations are complete                                             |

> Note: This only deletes loose branches - it should be fixed in the future to delete packed branches as well.

Example Code:

```js live
await git.deleteBranch({ dir: '$input((/))', ref: '$input((local-branch))' })
console.log('done')
```
