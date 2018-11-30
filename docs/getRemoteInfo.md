---
title: getRemoteInfo
sidebar_label: getRemoteInfo
---

List a remote servers branches, tags, and capabilities.

| param                                   | type [= default]                              | description                                                                                                                    |
| --------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **url**                                 | string                                        | The URL of the git repository.                                                                                                 |
| corsProxy                               | string = undefined                            | Optional [CORS proxy](https://www.npmjs.com/@isomorphic-git/cors-proxy). Value is stored in the git config file for that repo. |
| username, password, token, oauth2format | string,&nbsp;string,&nbsp;string,&nbsp;string | See the [Authentication](./authentication.html) documentation                                                                  |
| noGitSuffix                             | bool     = false                              | If true, clone will not auto-append a `.git` suffix to the `url`. (**AWS CodeCommit needs this option**)                       |
| forPush                                 | bool     = false                              | By default, the command queries the 'fetch' capabilities. If true, it will ask for the 'push' capabilities.                    |
| return                                  | Promise\<Object\>                             | Resolves successfully with an object listing the branches, tags, and capabilities of the remote.                               |

This is a rare command that doesn't require an `fs`, `dir`, or even `gitdir` argument.
It just communicates to a remote git server, using the first step of the `git-upload-pack` handshake, but stopping short of fetching the packfile.

TODO: Document the response object schema.

```js live
let info = await git.getRemoteInfo({
  url: '$input((https://cors.isomorphic-git.org/github.com/isomorphic-git/isomorphic-git.git))'
})
console.log(info)

```
