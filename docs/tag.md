---
title: tag
sidebar_label: tag
---

Create a lightweight tag

| param           | type [= default]          | description                                                                                                                                         |
| --------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| core            | string = 'default'        | The plugin core identifier to use for plugin injection                                                                                              |
| fs [deprecated] | FileSystem                | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).                                           |
| dir             | string                    | The [working tree](dir-vs-gitdir.md) directory path                                                                                                 |
| **gitdir**      | string = join(dir,'.git') | The [git directory](dir-vs-gitdir.md) path                                                                                                          |
| **ref**         | string                    | What to name the tag                                                                                                                                |
| object          | string = 'HEAD'           | What oid the tag refers to. (Will resolve to oid if value is a ref.) By default, the commit object which is referred by the current `HEAD` is used. |
| force           | boolean = false           | Instead of throwing an error if a tag named `ref` already exists, overwrite the existing tag.                                                       |
| return          | Promise\<void\>           | Resolves successfully when filesystem operations are complete                                                                                       |

Example Code:

```js live
await git.tag({ dir: '$input((/))', ref: '$input((test-tag))' })
console.log('done')
```
