---
title: packObjects
sidebar_label: packObjects
---

Create a packfile from an array of SHA-1 object ids

| param           | type [= default]                | description                                                                                                    |
| --------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule                        | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string                  | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| oids            | string[]                        | An array of SHA-1 object ids to be included in the packfile }                                                  |
| write           | boolean = false                 | Whether to save the packfile to disk or not                                                                    |
| return          | Promise\<{filename, packfile}\> | Resolves successfully when the packfile is ready with the filename and buffer                                  |

The packObjects command returns an object with two properties:

| prop     | type    | description                                                                                                                |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| filename | string  | The suggested filename for the packfile if you want to save it to disk somewhere. It includes the packfile SHA.            |
| packfile | Buffer? | The packfile contents. Not present if `write` parameter was true, in which case the packfile was written straight to disk. |

Example code:

```js live
// Create a packfile containing only an empty tree
let { packfile } = await git.packObjects({
  dir: '$input((/))',
  oids: [$input(('4b825dc642cb6eb9a060e54bf8d69288fbee4904'))]
})
console.log(packfile)
```
