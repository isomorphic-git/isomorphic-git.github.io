---
title: listBranches
sidebar_label: listBranches
---

List branches

| param                   | type [= default]           | description                                                                                                                                         |
| ----------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string   | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| remote                  | string   = undefined       | If specified, list the branches of this remote.                                                                                                     |
| return                  | Promise\<Array\<string\>\> | Resolves successfully with an array of branch names                                                                                                 |

By default it lists local branches. If a 'remote' is specified, it lists the remote's branches.

Note that specifying a remote does not actually contact the server and update the list of branches.
If you want an up-to-date list, first do a `fetch` to that remote.
(Which branch you fetch doesn't matter - the list of branches available on the remote is updated during the fetch handshake.)

```js
let repo = {fs, dir: '<@.@>'}
let branches = await git.listBranches(repo)
console.log(branches)
let remoteBranches = await git.listBranches({...repo, remote: '<@origin@>'})
console.log(remoteBranches)
```
