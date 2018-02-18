---
title: listTags
sidebar_label: listTags
---

List tags

| param                   | type [= default]           | description                                                                                                                                         |
| ----------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string   | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| return                  | Promise\<Array\<string\>\> | Resolves successfully with an array of tag names                                                                                                    |

```js
let repo = {fs, dir: '$input((.))'}
let tags = await git.listTags(repo)
console.log(tags)
```