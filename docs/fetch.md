---
title: fetch
sidebar_label: fetch
---

Fetch commits from a remote.

| param                   | type [= default]                   | description                                                                                                                                         |
| ----------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule,&nbsp;string,&nbsp;string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **url**                 | string                             | The URL of the remote repository.                                                                                                                   |
| ref                     | string   = 'HEAD'                  | Which branch to fetch. By default this is the currently checked out branch.                                                                         |
| remote                  | string   = 'origin'                | What to name the remote that is created. The default is 'origin'.                                                                                   |
| authUsername            | string   = undefined               | The username to use with Basic Auth                                                                                                                 |
| authPassword            | string   = undefined               | The password to use with Basic Auth                                                                                                                 |
| depth                   | integer  = undefined               | Determines how much of the git repository's history to retrieve.                                                                                    |
| since                   | Date     = undefined               | Only fetch commits created after the given date. Mutually exclusive with `depth`.                                                                   |
| exclude                 | Array\<string\> = [ ]              | A list of branches or tags. Instructs the remote server not to send us any commits reachable from these refs.                                       |
| relative                | boolean  = false                   | Changes the meaning of `depth` to be measured from the current shallow depth rather than from the branch tip.                                       |
| tags                    | boolean  = false                   | Also fetch tags                                                                                                                                     |
| onprogress              | Function = undefined               | Callback to receive [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent)s for the operation.                             |
| return                  | Promise\<void\>                    | Resolves successfully when fetch completes                                                                                                          |

```js
let repo = {fs, dir: '<@.@>'}
await git.fetch({
  ...repo,
  url: '<@https://cors-buster-jfpactjnem.now.sh/github.com/isomorphic-git/isomorphic-git@>',
  ref: '<@master@>',
  depth: <@1@>,
  tags: <@false@>
})
console.log('done')
```
