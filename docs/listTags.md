---
title: listTags
sidebar_label: listTags
---

List tags

| param           | type [= default]           | description                                                                                                    |
| --------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule                   | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string             | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| return          | Promise\<Array\<string\>\> | Resolves successfully with an array of tag names                                                               |

```js live
let tags = await git.listTags({ dir: '$input((/))' })
console.log(tags)
```