---
title: readObject
sidebar_label: readObject
---

Read a git object directly by its SHA1 object id

| param           | type [= default]                | description                                                                                                                                                                     |
| --------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule                        | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).                                                                       |
| **dir**, gitdir | string, string                  | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path                                                                  |
| **oid**         | string                          | The SHA-1 object id to get.                                                                                                                                                     |
| format          | string = 'parsed'               | What format to return the object in. The possible choices are listed below.                                                                                                     |
| filepath        | string = undefined              | Don't return the object with `oid` itself, but resolve `oid` to a tree and then return the object at that filepath. To return the root directory of a tree set filepath to `''` |
| encoding        | string = undefined              | A convenience argument that only affects blobs. Instead of returning `object` as a buffer, it returns a string parsed using the given encoding.                                 |
| return          | Promise\<GitObjectDescription\> | Resolves successfully with a git object description.                                                                                                                             |

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
  // Will be the same as the `oid` argument unless the `filepath` argument is provided,
  // in which case it will be the oid of the tree or blob being returned.
  oid: string,

  // Note: The type is not included for 'deflated' and 'wrapped' formatted objects
  // because you likely don't care or plan to decode that information yourself.
  type?: 'blob' | 'tree' | 'commit' | 'tag',

  // This is usually, but not always, the format you requested. Packfiles do not store
  // each object individually compressed so if you end up reading the object from a packfile
  // it will be returned in format 'content' even if you requested 'deflated' or 'wrapped'.
  format: 'deflated' | 'wrapped' | 'content' | 'parsed',

  // If format is 'parsed', commits and trees are returned as Objects, but blobs are still formatted as Buffers
  // unless an encoding is provided in which case they'll be strings.
  // If format is anything other than 'parsed', object will be a Buffer.
  // TODO: Eventually there will be a TagDescription as well for parsing annotated tags.
  object: Buffer | String | CommitDescription | TreeDescription,

  // This is the name of the packfile or loose object file where the object was found.
  source?: string
}
```

```js live
// Get the contents of 'README.md' in the master branch.
let sha = await git.resolveRef({ dir: '$input((/))', ref: '$input((master))' })
console.log(sha)
let { object: blob } = await git.readObject({
  dir: '$input((/))',
  oid: $input((sha)),
  $textarea((filepath: 'README.md',
  encoding: 'utf8'))
})
console.log(blob)
```

```js live
// Find all the .js files in the current master branch containing the word 'commit'
let sha = await git.resolveRef({ dir: '$input((/))', ref: '$input((master))' })
console.log(sha)
let { object: commit } = await git.readObject({ dir: '$input((/))', oid: sha })
console.log(commit)

const searchTree = async ({oid, prefix = ''}) => {
  let { object: tree } = await git.readObject({ dir: '$input((/))', oid })
  for (let entry of tree.entries) {
    if (entry.type === 'tree') {
      await searchTree({oid: entry.oid, prefix: `${prefix}/${entry.path}`})
    } else if (entry.type === 'blob') {
      if ($input((entry.path.endsWith('.js')))) {
        let { object: blob } = await git.readObject({ dir: '$input((/))', oid: entry.oid })
        if ($input((blob.toString('utf8').includes('commit')))) {
          console.log(`${prefix}/${entry.path}`)
        }
      }
    }
  }
}

await searchTree({oid: commit.tree})
console.log('done')
```
