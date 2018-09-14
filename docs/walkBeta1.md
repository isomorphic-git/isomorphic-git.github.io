---
title: walkBeta1
sidebar_label: walkBeta1
---

A powerful recursive tree-walking utility.

| param           | type [= default]                 | description                                                                                                    |
| --------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule                         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string                   | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **trees**       | GitWalker[]                      | The trees you want to traverse                                                                                 |
| filter          | async (TreeEntry[]) => boolean   | Filter which GitWalkEntries to process                                                                         |
| map             | async (TreeEntry[]) => any       | Transform GitWalkEntries into a result form                                                                    |
| iterate         | async (recurse, children) => any | Fine-tune how entries within a tree are iterated over                                                          |
| reduce          | async (parent, children) => any  | Control how tree entries are combined with their parent tree result                                            |
| return          | any                              | The finished tree-walking result                                                                               |


The `walk` API (tentatively named `walkBeta1`) simplifies gathering detailed information about a tree or comparing all the filepaths in two or more trees.
Trees can be file directories, git commits, or git indexes (aka staging areas).
So you can compare two file directories, or 10 commits, or the stage of one repo with the working directory of another repo... etc.
As long as a file or directory is present in at least one of the trees, it will be traversed.
Entries are traversed in alphabetical order.

The arguments to `walk` are the `trees` you want to traverse, and 4 optional transform functions:
 `filter`, `map`, `reduce`, and `iterate`.

The trees are represented by three magic functions that can be imported:
```js
import { TREE, WORKDIR, STAGE } from 'isomorphic-git'
```

These functions return objects that implement the `GitWalker` interface.
The only thing they are good for is passing into `walkBeta1`'s `trees` argument.
Here are the three `trees` passed into `walkBeta1` by the `statusMatrix` command for example:
```js
let gitdir = '.git'
let dir = '.'
let ref = 'HEAD'

let trees = [
  TREE({fs, gitdir, ref}),
  WORKDIR({fs, dir, gitdir}),
  STAGE({fs, gitdir})
]
```

`filter`, `map`, `reduce`, and `iterate` allow you control the recursive walk by pruning and transforming `TreeEntry`s into the desired result.

### TreeEntry
The `TreeEntry` is an interface that abstracts computing many common tree / blob stats.
`filter` and `map` each receive an array of `TreeEntry[]` as their main argument, one `TreeEntry` for each `GitWalker` in the `trees` argument.

By default, `TreeEntry`s only have three properties:
```js
{
  fullpath: string;
  basename: string;
  exists: boolean;
}
```

Additional properties can be computed only when needed. This lets you build lean, mean, efficient walking machines.
```js
await entry.populateStat()
// populates
entry.type // 'tree', 'blob'
// and where applicable, these properties:
entry.ctimeSeconds // number;
entry.ctimeNanoseconds // number;
entry.mtimeSeconds // number;
entry.mtimeNanoseconds // number;
entry.dev // number;
entry.ino // number;
entry.mode // number;
entry.uid // number;
entry.gid // number;
entry.size // number;
```

```js
await entry.populateContent()
// populates
entry.content // Buffer
// except for STAGE which does not currently provide content
```

```js
await entry.populateHash()
// populates
entry.oid // SHA1 string
```

### filter(TreeEntry[]) => boolean

Default: `async () => true`.

This is a good place to put limiting logic such as skipping entries with certain filenames.
If you return false for directories, then none of the children of that directory will be walked.

Example:
```js
let path = require('path')
let cwd = 'src/app'
// Only examine files in the directory `cwd`
async function filter ([head, workdir, stage]) {
  // It doesn't matter which tree (head, workdir, or stage) you use here.
  return (
    // return true for the root directory
    head.fullpath === '.' ||
    // return true for 'src' and 'src/app'
    cwd.startsWith(head.fullpath) ||
    // return true for 'src/app/*'
    path.dirname(head.fullpath) === cwd
  )
}
```

### map(TreeEntry[]) => any

Default: `async entry => entry`

This is a good place for query logic, such as examining the contents of a file.
Ultimately, compare all the entries and return any values you are interested in.
If you do not return a value (or return undefined) that entry will be filtered from the results.

Example 1: Find all the files containing the word 'foo'.
```js
async function map([head, workdir]) {
  await workdir.populateContent()
  let content = workdir.content.toString('utf8')
  if (content.contains('foo')) {
    return {
      fullpath: workdir.fullpath,
      content
    }
  }
}

```

Example 2: Return the difference between the working directory and the HEAD commit
```js
const diff = require('diff-lines')
async function map([head, workdir]) {
  await head.populateContent()
  await head.populateHash()
  await workdir.populateContent()
  return {
    filename: head.fullpath,
    oid: head.oid,
    diff: diff(head.content.toString('utf8'), workdir.content.toString('utf8'))
  }
}
```

### iterate(walk, children)

Default: `(recurse, children) => Promise.all([...children].map(recurse))`

The default implementation recurses all children concurrently using Promise.all.
However you could use a custom function to traverse children serially or use a global queue to throttle recursion.

### reduce(mappedParent, mappedChildren[])

Default: `async (parent, children) => parent === undefined ? children.flat() : [parent, children].flat()`

The default implementation of this function returns all directories and children in a giant flat array.
You can define a different accumulation method though.

Example: Return a hierarchical structure
```js
async function reduce (parent, children) {
  return Object.assign(parent, { children })
}
```

For a complete example, it is best to look at the implementation of `statusMatrix` for now.
