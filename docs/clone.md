---
title: clone
sidebar_label: clone
---

Clone a repository

| param                   | type, default                      | description                                                                                                                                                         |
| ----------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule,&nbsp;string,&nbsp;string | The filesystem holding the git repo, the [working tree](index.html#dir-vs-gitdir) directory path, and optionally the [git directory](index.html#dir-vs-gitdir) path |
| **url**                 | string                             | The URL of the remote repository.                                                                                                                                   |
| ref                     | string   = undefined               | Which branch to clone. By default this is the designated "main branch" of the repository.                                                                           |
| remote                  | string   = 'origin'                | What to name the remote that is created. The default is 'origin'.                                                                                                   |
| authUsername            | string   = undefined               | The username to use with Basic Auth                                                                                                                                 |
| authPassword            | string   = undefined               | The password to use with Basic Auth                                                                                                                                 |
| depth                   | integer  = undefined               | Determines how much of the git repository's history to retrieve.                                                                                                    |
| since                   | Date     = undefined               | Only fetch commits created after the given date. Mutually exclusive with `depth`.                                                                                   |
| exclude                 | Array<string> = [ ]                | A list of branches or tags. Instructs the remote server not to send us any commits reachable from these refs.                                                       |
| relative                | boolean  = false                   | Changes the meaning of `depth` to be measured from the current shallow depth rather than from the branch tip.                                                       |
| onprogress              | Function = undefined               | Callback to receive [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent)s for the operation.                                             |
| return                  | Promise<void>                      | Resolves successfully when clone completes                                                                                                                          |

```js
let repo = {fs, dir: '<@.@>'}
await git.clone({
  ...repo,
  url: '<@https://cors-buster-jfpactjnem.now.sh/github.com/isomorphic-git/isomorphic-git@>',
  depth: 1
})
console.log('done')
```