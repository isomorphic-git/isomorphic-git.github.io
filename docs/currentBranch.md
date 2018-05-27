---
title: currentBranch
sidebar_label: currentBranch
---

Get the name of the branch currently pointed to by .git/HEAD

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| fullname                | boolean = false          | Return the full path (e.g. "refs/heads/master") instead of the abbreviated form.                                                                    |
| return                  | Promise\<string\>        | The name of the current branch                                                                                                                      |

This is a convenience function that does the same thing as:

`await git.resolveRef({fs, dir, ref: 'HEAD', depth: 2})`

but it also abbreviates the result by removing the (usually unnecessary) "refs/" prefixes from the name.

```js live
let repo = {fs, dir: '$input((.))'}

// Write config value
await git.currentBranch({
  ...repo,
  fullname: $input((false))
})
```
