---
title: push
sidebar_label: push
---

Push a branch or tag

| param                                   | type [= default]                              | description                                                                                                         |
| --------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| fs [deprecated]                         | FSModule                                      | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).           |
| **dir**, gitdir                         | string, string                                | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path      |
| username, password, token, oauth2format | string,&nbsp;string,&nbsp;string,&nbsp;string | See the [Authentication](./authentication.html) documentation                                                       |
| ref                                     | string = undefined                            | Which branch to push. By default this is the currently checked out branch.                                          |
| remote                                  | string = 'origin'                             | If URL is not specified, determines which remote to use.                                                            |
| force                                   | bool   = false                                | If true, behaves the same as `git push --force`                                                                     |
| noGitSuffix                             | bool   = false                                | If true, clone will not auto-append a `.git` suffix to the `url`. (**AWS CodeCommit needs this option**)            |
| url                                     | string = undefined                            | The URL of the remote git server. The default is the value set in the git config for that remote.                   |
| corsProxy                               | string = undefined                            | Optional [CORS proxy](https://www.npmjs.com/@isomorphic-git/cors-proxy). Overrides value in repo config. |
| emitter                                 | EventEmitter = undefined                      | Listeners to this EventEmitter can receive 'message' events.                                                        |
| return                                  | Promise\<PushResponse\>                       | Resolves successfully when push completes with a detailed description of the operation from the server.             |

The push command returns an object that describes the result of the attempted push operation.
*Notes:* If there were no errors, then there will be no `errors` property. There can be a mix of `ok` messages and `errors` messages.

| param  | type [= default] | description                                                                                                                                                                                                      |
| ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ok     | Array\<string\>  | The first item is "unpack" if the overall operation was successful. The remaining items are the names of refs that were updated successfully.                                                                    |
| errors | Array\<string\>  | If the overall operation threw and error, the first item will be "unpack {Overall error message}". The remaining items are individual refs that failed to be updated in the format "{ref name} {error message}". |


To monitor progress, create an EventEmitter, add listeners, and pass into the function as the `emitter` argument.

| event   | type   | description                                                                                          |
| ------- | ------ | ---------------------------------------------------------------------------------------------------- |
| message | string | The messages from the remote git server, normally shown in the git console prefixed with "`remote:`" |


 ```js live
let pushResponse = await git.push({
  dir: '$input((.))',
  remote: '$input((origin))',
  ref: '$input((master))',
  token: $input((process.env.GITHUB_TOKEN)),
})
console.log(pushResponse)
```