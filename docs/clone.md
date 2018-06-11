---
title: clone
sidebar_label: clone
---

Clone a repository

| param                                   | type [= default]                              | description                                                                                                                                         |
| --------------------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir                 | FSModule,&nbsp;string,&nbsp;string            | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| username, password, token, oauth2format | string,&nbsp;string,&nbsp;string,&nbsp;string | See the [Authentication](./authentication.html) documentation                                                                                       |
| **url**                                 | string                                        | The URL of the remote repository.                                                                                                                   |
| ref                                     | string   = undefined                          | Which branch to clone. By default this is the designated "main branch" of the repository.                                                           |
| singleBranch                            | bool     = false                              | Instead of the default behavior of fetching all the branches, only fetch a single branch.                                                           |
| noCheckout                              | bool     = false                              | If true, clone will only fetch the repo, not check out a branch. Skipping checkout can save a lot of time normally spent writing files to disk.     |
| remote                                  | string   = 'origin'                           | What to name the remote that is created. The default is 'origin'.                                                                                   |
| depth                                   | integer  = undefined                          | Determines how much of the git repository's history to retrieve.                                                                                    |
| since                                   | Date     = undefined                          | Only fetch commits created after the given date. Mutually exclusive with `depth`.                                                                   |
| exclude                                 | Array\<string\> = [ ]                         | A list of branches or tags. Instructs the remote server not to send us any commits reachable from these refs.                                       |
| relative                                | boolean  = false                              | Changes the meaning of `depth` to be measured from the current shallow depth rather than from the branch tip.                                       |
| emitter                                 | EventEmitter = undefined                      | Listeners to this EventEmitter can receive 'progress' and 'message' events.                                                                         |
| return                                  | Promise\<void\>                               | Resolves successfully when clone completes                                                                                                          |

To monitor progress, create an EventEmitter, add listeners, and pass into the function as the `emitter` argument.

| event    | type                                                                            | description                                                                     |
| -------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| message  | string                                                                          | The messages embedded in the git packfile normally displayed in the git console |
| progress | [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) | Just the numbers from those messages                                            |

Example code:

```js live
let repo = {fs, dir: '$input((.))'}
await git.clone({
  ...repo,
  url: '$input((https://cors-buster-tbgktfqyku.now.sh/github.com/isomorphic-git/isomorphic-git))',
  $textarea((singleBranch: true,
  depth: 1))
})
console.log('done')
```