---
title: writeRef
sidebar_label: writeRef
---

Write a ref which refers to the specified object id, or a symbolic ref which refers to the specified ref.

| param           | type, default   | description                                                                                                    |
| --------------- | --------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule        | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string  | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**         | string          | The ref to write.                                                                                              |
| **value**       | string          | When `symbolic` is false, a ref or an SHA-1 object id. When true, a ref starting with `refs/`.                 |
| force           | boolean = false | Instead of throwing an error if a ref named `ref` already exists, overwrite the existing ref.                  |
| symbolic        | boolean = false | Whether the ref is symbolic or not.                                                                            |
| return          | Promise\<void\> | Resolves successfully when filesystem operations are complete                                                  |

```js live
await git.writeRef({
  dir: '$input((/))',
  ref: '$input((refs/heads/another-branch))',
  value: '$input((HEAD))'
})
await git.writeRef({
  dir: '$input((/))',
  ref: '$input((HEAD))',
  value: '$input((refs/heads/another-branch))',
  force: $input((true)),
  symbolic: $input((true))
})
console.log('done')
```