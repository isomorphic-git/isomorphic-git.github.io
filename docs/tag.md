---
title: tag
sidebar_label: tag
---

Create a lightweight tag

| param           | type [= default]   | description                                                                                                                                                   |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule           | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).                                                     |
| **dir**, gitdir | string, string     | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path                                                |
| **name**        | string             | What to name the tag                                                                                                                                          |
| value           | string = undefined | What object the tag refers to. Also accepts a ref. By default, the commit object which is referred by the current `HEAD` is used.                                                 |
| force           | boolean = false    | Instead of throwing an error if a tag named `name` already exists, overwrite the existing tag. Note that this option does not modify the existing tag object. |
| return          | Promise\<void\>    | Resolves successfully when filesystem operations are complete                                                                                                 |

```js live
await git.tag({ dir: '$input((.))', name: '$input((test-tag))' })
```
