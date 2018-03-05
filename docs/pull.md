---
title: pull
sidebar_label: pull
---

Fetch and merge commits from a remote repository *(Currently, only fast-forward merges are implemented.)*

| param                   | type [= default]                   | description                                                                                                                                         |
| ----------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule,&nbsp;string,&nbsp;string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| ref                     | string   = undefined               | Which branch to fetch. By default this is the currently checked out branch.                                                                         |
| singleBranch            | bool     = false                   | Instead of the default behavior of fetching all the branches, only fetch a single branch.                                                           |
| fastForwardOnly         | bool     = false                   | Only perform simple fast-forward merges. (Don't create merge commits.)                                                                              |
| authUsername            | string   = undefined               | The username to use with Basic Auth                                                                                                                 |
| authPassword            | string   = undefined               | The password to use with Basic Auth                                                                                                                 |
| emitter                 | EventEmitter = undefined           | Listeners to this EventEmitter will receive progress events.                                                                                        |
| return                  | Promise\<void\>                    | Resolves successfully when pull operation completes                                                                                                 |

Example code:

```js live
let repo = {fs, dir: '$input((.))'}
await git.pull({
  ...repo,
  ref: '$input((master))',
  singleBranch: $input((true))
})
console.log('done')
```
