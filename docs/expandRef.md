---
title: expandRef
sidebar_label: expandRef
---

Expand an abbreviated ref to its full name

| param                   | type, default            | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**                 | string                   | The ref to expand (like "v1.0.0")                                                                                                                   |
| return                  | Promise\<string\>        | Resolves successfully with a full ref name ("refs/tags/v1.0.0")                                                                                     |

```js live
let repo = {fs, dir: '$input((.))'}
let fullRef = await git.expandRef({...repo, ref: '$input((master))'})
console.log(fullRef)
```