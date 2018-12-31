---
title: log
sidebar_label: log
---

Get commit descriptions from the git history

| param           | type [= default]                      | description                                                                                                    |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule                              | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string                        | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| ref             | string = 'HEAD'                       | The commit to begin walking backwards through the history from.                                                |
| depth           | number = undefined                    | Limit the number of commits returned. No limit by default.                                                     |
| since           | Date = undefined                      | Return history newer than the given date. Can be combined with `depth` to get whichever is shorter.            |
| return          | Promise\<Array\<CommitDescription\>\> | Resolves to an array of CommitDescription objects                                                              |

Returns an array of objects with a schema like this:

```ts
export interface CommitDescription {
  oid: string,      // SHA1 object id of this commit
  message: string,  // Commit message
  tree: string,     // SHA1 object id of corresponding file tree
  parent: string[], // an array of zero or more SHA1 object ids
  author: {
    name: string,          // The author's name
    email: string,         // The author's email
    timestamp: number,     // UTC Unix timestamp in seconds
    timezoneOffset: number // Timezone difference from UTC in minutes
  },
  committer: {
    name: string,          // The committer's name
    email: string,         // The committer's email
    timestamp: number,     // UTC Unix timestamp in seconds
    timezoneOffset: number // Timezone difference from UTC in minutes
  }
  gpgsig?: string   // PGP signature (if present)
}
```

```js live
let commits = await git.log({ dir: '$input((/))', depth: $input((5)), ref: '$input((master))' })
console.log(commits)
```
