---
title: currentBranch
sidebar_label: currentBranch
---

Get the name of the branch currently pointed to by .git/HEAD

| param           | type [= default]  | description                                                                                                    |
| --------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule          | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string    | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| fullname        | boolean = false   | Return the full path (e.g. "refs/heads/master") instead of the abbreviated form.                               |
| return          | Promise\<string\> | The name of the current branch                                                                                 |

This is a convenience function that does the same thing as:

`await git.resolveRef({dir, ref: 'HEAD', depth: 2})`

but it also abbreviates the result by removing the (usually unnecessary) "refs/" prefixes from the name.

```js live
// Get the current branch name
let branch = await git.currentBranch({ dir: '$input((.))', fullname: $input((false)) })
console.log(branch)
```
