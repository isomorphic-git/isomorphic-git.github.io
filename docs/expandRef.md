---
title: expandRef
sidebar_label: expandRef
---

Expand an abbreviated ref to its full name

| param           | type, default     | description                                                                                                    |
| --------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule          | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string    | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**         | string            | The ref to expand (like "v1.0.0")                                                                              |
| return          | Promise\<string\> | Resolves successfully with a full ref name ("refs/tags/v1.0.0")                                                |

```js live
let fullRef = await git.expandRef({ dir: '$input((/))', ref: '$input((master))'})
console.log(fullRef)
```