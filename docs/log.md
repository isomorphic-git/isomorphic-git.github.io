---
title: log
sidebar_label: log
---

Get commit descriptions from the git history

Returns an array of objects with a schema like this:

```js
/*
 * @typedef {Object} CommitDescription
 * @property {string} oid - SHA1 object id of this commit
 * @property {string} message - Commit message
 * @property {string} tree - SHA1 object id of corresponding file tree
 * @property {string[]} parent - an array of zero or more SHA1 oids
 * @property {Object} author
 * @property {string} author.name
 * @property {string} author.email
 * @property {number} author.timestamp - UTC Unix timestamp in seconds
 * @property {number} author.timezoneOffset - Timezone difference from UTC in minutes
 * @property {Object} committer
 * @property {string} committer.name
 * @property {string} committer.email
 * @property {number} committer.timestamp - UTC Unix timestamp in seconds
 * @property {number} committer.timezoneOffset - Timezone difference from UTC in minutes
 * @property {string} [gpgsig] - PGP signature (if present)
 */
```

| param                   | type, default                     | description                                                                                                                                                         |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string          | The filesystem holding the git repo, the [working tree](index.html#dir-vs-gitdir) directory path, and optionally the [git directory](index.html#dir-vs-gitdir) path |
| depth                   | number = undefined                | Limit the number of commits returned. No limit by default.                                                                                                          |
| since                   | Date = undefined                  | Return history newer than the given date. Can be combined with `depth` to get whichever is shorter.                                                                 |
| ref                     | string = 'HEAD'                   | The commit to begin walking backwards through the history from.                                                                                                     |
| return                  | Promise<Array<CommitDescription>> | Resolves to an array of CommitDescription objects                                                                                                                   |

```js
let repo = {fs, dir: '<@.@>'}
let commits = await git.log({...repo, depth: 5, ref: '<@master@>'})
console.log(commits)
```
