---
title: push
sidebar_label: push
---

Push a branch

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| ref                     | string=undefined         | Which branch to push. By default this is the currently checked out branch.                                                                          |
| remote                  | string='origin'          | If URL is not specified, determines which remote to use.                                                                                            |
| url                     | string=undefined         | The URL of the remote git server. The default is the value set in the git config for that remote.                                                   |
| authUsername            | string=undefined         | The username to use with Basic Auth                                                                                                                 |
| authPassword            | string=undefined         | The password to use with Basic Auth                                                                                                                 |
| emitter                 | EventEmitter = undefined | Listeners to this EventEmitter can receive 'message' events.                                                                                        |
| return                  | Promise\<PushResponse\>  | Resolves successfully when push completes with a detailed description of the operation from the server.                                             |

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
let repo = {fs, dir: '$input((.))'}
let pushResponse = await git.push({
  ...repo,
  remote: '$input((origin))',
  ref: '$input((master))',
  authUsername: $input((process.env.GITHUB_TOKEN)),
  authPassword: $input((process.env.GITHUB_TOKEN))
})
console.log(pushResponse)
```