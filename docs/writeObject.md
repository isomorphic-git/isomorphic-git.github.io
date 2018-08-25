---
title: writeObject
sidebar_label: writeObject
---

Write a git object directly

| param           | type [= default]          | description                                                                                                    |
| --------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule                  | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string            | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **object**      | Buffer, String, or Object | The object to write.                                                                                           |
| type            | string = undefined        | `'blob'`, `'tree'`, `'commit'`, or `'tag'`                                                                     |
| format          | string = 'parsed'         | What format the object is in. The possible choices are listed below.                                           |
| oid             | string = undefined        | If `format` is `'deflated'` then this param is required. Otherwise it is calculated.                           |
| encoding        | string = undefined        | If `type` is `'blob'` then `content` will be converted to a Buffer using `encoding`.                           |
| return          | Promise\<string\>         | Resolves successfully with the object id of the newly written object.                                          |

`format` can have the following values:

| param      | description                                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 'deflated' | Treat `object` as the raw deflate-compressed buffer for an object, meaning can be written to `.git/objects/*/*` as-is.                                         |
| 'wrapped'  | Treat `object` as the inflated object buffer wrapped in the git object header. This is the raw buffer used when calculating the SHA object id of a git object. |
| 'content'  | Treat `object` as the object buffer without the git header.                                                                                                    |
| 'parsed'   | Treat `object` as a parsed representation of the object.                                                                                                       |

If `format` is `'parsed'`, then `object` must match one of the schemas for `CommitDescription`, `TreeDescription`, or `TagDescription` described in... 
shucks I haven't written that page yet. :( Well, described in the [TypeScript definition](https://github.com/isomorphic-git/isomorphic-git/blob/master/src/index.d.ts) for now.

```js live
// Manually create an annotated tag.
let sha = await git.resolveRef({ dir: '$input((.))', ref: '$input((HEAD))' })
console.log('commit', sha)

let oid = await git.writeObject({
  dir: '$input((.))',
  type: 'tag',
  object: {
    object: sha,
    type: 'commit',
    tag: '$input((my-tag))',
    tagger: {
      name: '$input((your name))',
      email: '$input((email@example.com))',
      timestamp: Math.floor(Date.now()/1000),
      timezoneOffset: new Date().getTimezoneOffset()
    },
    message: '$input((Optional message))',
    signature: ''
  }
})

console.log('tag', oid)
```
