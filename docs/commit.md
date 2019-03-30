---
title: commit
sidebar_label: commit
---

Create a new commit

| param                 | type [=default]    | description                                                                                                                                                         |
| --------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fs [deprecated]       | FSModule           | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).                                                           |
| **dir**, gitdir       | string, string     | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path                                                      |
| **message**           | string             | The commit message to use.                                                                                                                                          |
| author                | Object             | The details about the commit author.                                                                                                                                |
| author.name           | string = undefined | Default is `user.name` config.                                                                                                                                      |
| author.email          | string = undefined | Default is `user.email` config.                                                                                                                                     |
| author.date           | Date = new Date()  | Set the author timestamp field. Default is the current date.                                                                                                        |
| author.timestamp      | number = undefined | Set the author timestamp field. This is an alternative to using `date` using an integer number of seconds since the Unix epoch instead of a JavaScript date object. |
| author.timezoneOffset | number = undefined | Set the author timezone offset field. This is the difference, in minutes, from the current timezone to UTC. Default is `(new Date()).getTimezoneOffset()`.          |
| committer             | Object = author    | The details about the commit committer, in the same format as the author parameter. If not specified, the author details are used.                                  |
| signingKey            | string = undefined | Sign the commit using this private PGP key.                                                                                                                         |
| return                | Promise\<void\>    | Resolves successfully with the SHA-1 object id of the newly created commit.                                                                                         |

```js live
let sha = await git.commit({
  dir: '$input((/))',
  author: {
    name: '$input((Mr. Test))',
    email: '$input((mrtest@example.com))'
  },
  message: '$input((Added the a.txt file))'
})
console.log(sha)
```