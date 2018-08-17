---
title: listBranches
sidebar_label: listBranches
---

List branches

| param           | type [= default]           | description                                                                                                    |
| --------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule                   | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string             | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| remote          | string   = undefined       | Instead of the branches in `refs/heads`, list the branches in `refs/remotes/${remote}`.                        |
| return          | Promise\<Array\<string\>\> | Resolves successfully with an array of branch names                                                            |

By default it lists local branches. If a 'remote' is specified, it lists the remote's branches.

Note that specifying a remote does not actually contact the server and update the list of branches.
If you want an up-to-date list, first do a `fetch` to that remote.
(Which branch you fetch doesn't matter - the list of branches available on the remote is updated during the fetch handshake.)

```js live
let branches = await git.listBranches({ dir: '$input((.))' })
console.log(branches)
let remoteBranches = await git.listBranches({ dir: '$input((.))', remote: '$input((origin))' })
console.log(remoteBranches)
```
