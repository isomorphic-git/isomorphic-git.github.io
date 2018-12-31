---
title: checkout
sidebar_label: checkout
---

Checkout a branch

| param                | type [= default]         | description                                                                                                    |
| -------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated]      | FSModule                 | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir      | string, string           | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**              | string                   | Which branch to checkout.                                                                                      |
| remote               | string = 'origin'        | Which remote repository to use.                                                                                |
| emitter [deprecated] | EventEmitter = undefined | Overrides the emitter set via the ['emitter' plugin](./plugin_emitter.md).                                     |
| emitterPrefix        | string = ''              | Scope emitted events by prepending `emitterPrefix` to the event name.                                          |
| return               | Promise\<void\>          | Resolves successfully when filesystem operations are complete                                                  |

If the branch already exists it will check out that branch. Otherwise, it will create a new remote tracking branch set to track the remote branch of that name.

Example code:

```js live
await git.checkout({ dir: '$input((/))', ref: '$input((master))' })
console.log('done')
```