---
title: merge
sidebar_label: merge
---

Merge one or more branches *(Currently, only fast-forward merges are implemented.)*

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| ours                    | string = undefined       | The branch receiving the merge. If undefined, defaults to the current branch.                                                                       |
| **theirs**              | string                   | The branch to be merged.                                                                                                                            |
| fastForwardOnly         | boolean = false          | If true, then non-fast-forward merges will throw an Error instead of performing a merge.                                                            |
| return                  | Promise\<MergeReport\>   | Resolves to a description of the merge operation.                                                                                                   |

Returns an object with a schema like this:

```ts
export interface MergeReport {
  oid: string,              // The oid that is now at the head of the branch
  alreadyMerged?: boolean,  // True if the branch was already merged so no changes were made
  fastForward?: boolean     // True if it was a fast-forward merge
}
```

```js live
let repo = {fs, dir: '$input((.))'}
let m = await git.merge({...repo, ours: '$input((master))', theirs: '$input((remotes/origin/master))'})
console.log(m)
```
