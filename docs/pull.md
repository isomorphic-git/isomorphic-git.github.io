---
title: pull
sidebar_label: pull
---

Fetch and merge commits from a remote repository *(Currently, only fast-forward merges are implemented.)*

| param                                   | type [= default]                              | description                                                                                                    |
| --------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated]                         | FSModule                                      | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir                         | string, string                                | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| username, password, token, oauth2format | string,&nbsp;string,&nbsp;string,&nbsp;string | See the [Authentication](./authentication.html) documentation                                                  |
| ref                                     | string   = undefined                          | Which branch to fetch. By default this is the currently checked out branch.                                    |
| singleBranch                            | bool     = false                              | Instead of the default behavior of fetching all the branches, only fetch a single branch.                      |
| fastForwardOnly                         | bool     = false                              | Only perform simple fast-forward merges. (Don't create merge commits.)                                         |
| noGitSuffix                             | bool     = false                              | If true, clone will not auto-append a `.git` suffix to the `url`. (**AWS CodeCommit needs this option**)       |
| emitter                                 | EventEmitter = undefined                      | Listeners to this EventEmitter will receive progress events.                                                   |
| return                                  | Promise\<void\>                               | Resolves successfully when pull operation completes                                                            |

Example code:

```js live
await git.pull({
  dir: '$input((.))',
  ref: '$input((master))',
  singleBranch: $input((true))
})
console.log('done')
```
