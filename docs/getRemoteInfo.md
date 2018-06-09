---
title: getRemoteInfo
sidebar_label: getRemoteInfo
---

List a remote servers branches, tags, and capabilities.

| param                                   | type [= default]                              | description                                                                                      |
| --------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **url**                                 | string                                        | The URL of the git repository.                                                                   |
| username, password, token, oauth2format | string,&nbsp;string,&nbsp;string,&nbsp;string | See the [Authentication](./authentication.html) documentation                                    |
| return                                  | Promise\<Object\>                             | Resolves successfully with an object listing the branches, tags, and capabilities of the remote. |

This is a rare command that doesn't require an `fs`, `dir`, or even `gitdir` argument.
It just communicates to a remote git server, using the first step of the `git-upload-pack` handshake, but stopping short of fetching the packfile.

TODO: Document the response object schema.

```js live
let info = await git.getRemoteInfo({
  url: '$input((https://cors-buster-tbgktfqyku.now.sh/github.com/isomorphic-git/isomorphic-git.git))'
})
console.log(info)

```
