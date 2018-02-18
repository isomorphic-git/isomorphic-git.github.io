---
title: readObject
sidebar_label: readObject
---

Read a git object directly by its SHA1 object id

| param                   | type [= default]                | description                                                                                                                                         |
| ----------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string        | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **oid**                 | string                          | The SHA-1 object id to get.                                                                                                                         |
| **format**              | string = 'parsed'               | What format to return the object in. The possible choices are listed below.                                                                         |
| return                  | Promise\<GitObjectDescription\> | Resolves successfully with an array of tag names                                                                                                    |

`format` can have the following values:

| param      | description                                                                                                                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 'deflated' | Return the raw deflate-compressed buffer for an object if possible. Useful for efficiently shuffling around loose objects when you don't care about the contents and can save time by not inflating them. |
| 'wrapped'  | Return the inflated object buffer wrapped in the git object header if possible. This is the raw data used when calculating the SHA object id of a git object.                                             |
| 'content'  | Return the object buffer without the git header.                                                                                                                                                          |
| 'parsed'   | Returns a parsed representation of the object.                                                                                                                                                            |

Returns an object with a schema like this:

```ts
export interface GitObjectDescription {
  // Note: The type is not included for 'deflated' and 'wrapped' formatted objects
  // because you likely don't care or plan to decode that information yourself.
  type?: 'blob' | 'tree' | 'commit' | 'tag',

  // This is usually, but not always, the format you requested. Packfiles do not store
  // each object individually compressed so if you end up reading the object from a packfile
  // it will be returned in format 'content' even if you requested 'deflated' or 'wrapped'.
  format: 'deflated' | 'wrapped' | 'content' | 'parsed',

  // If format is 'parsed', commits and trees are returned as Objects, but blobs are still formatted as Buffers.
  // If format is anything other than 'parsed', object will be a Buffer.
  // TODO: Eventually there will be a TagDescription as well for parsing annotated tags.
  object: Buffer | CommitDescription | TreeDescription,

  // This is the name of the packfile or loose object file where the object was found.
  source?: string
}
```

```js
// Example:
// Find 'package.json' in the master branch and print it out.
//
let repo = {fs, dir: '$input((.))'}
let sha = await git.resolveRef({...repo, ref: '$input((master))'})
console.log(sha)
let { object: commit } = await git.readObject({...repo, oid: sha})
console.log(commit)
let { object: tree } = await git.readObject({...repo, oid: commit.tree})
console.log(tree)
for (let file of tree.entries) {
  if (file.path === 'package.json') {
    let { object: blob } = await git.readObject({...repo, oid: file.oid})
    console.log(blob.toString('utf8'))
  }
}
console.log('done')
```