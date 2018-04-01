---
title: status
sidebar_label: status
---

Tell whether a file has been changed

The possible resolve values are:

| status          | description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `"ignored"`     | file ignored by a .gitignore rule                                        |
| `"unmodified"`  | file unchanged from HEAD commit                                          |
| `"*modified"`   | file has modifications, not yet staged                                   |
| `"*deleted"`    | file has been removed, but the removal is not yet staged                 |
| `"*added"`      | file is untracked, not yet staged                                        |
| `"absent"`      | file not present in HEAD commit, staging area, or working dir            |
| `"modified"`    | file has modifications, staged                                           |
| `"deleted"`     | file has been removed, staged                                            |
| `"added"`       | previously untracked file, staged                                        |
| `"*unmodified"` | working dir and HEAD commit match, but index differs                     |
| `"*absent"`     | file not present in working dir or HEAD commit, but present in the index |


| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **filepath**            | string                   | The path to the file to query                                                                                                                       |
| return                  | Promise\<string\>        | Resolves successfully with the file's git status                                                                                                    |

```js live
let repo = {fs, dir: '$input((.))'}
let status = await git.status({...repo, filepath: '$input((README.md))'})
console.log(status)
```