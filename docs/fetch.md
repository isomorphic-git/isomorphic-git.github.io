---
title: fetch
sidebar_label: fetch
---

Fetch commits from a remote repository

| param                   | type [= default]                   | description                                                                                                                                         |
| ----------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule,&nbsp;string,&nbsp;string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| url                     | string   = undefined               | The URL of the remote repository. Will be gotten from gitconfig if absent.                                                                          |
| ref                     | string   = 'HEAD'                  | Which branch to fetch. By default this is the currently checked out branch.                                                                         |
| singleBranch            | bool     = false                   | Instead of the default behavior of fetching all the branches, only fetch a single branch.                                                           |
| remote                  | string   = 'origin'                | What to name the remote that is created. The default is 'origin'.                                                                                   |
| authUsername            | string   = undefined               | The username to use with Basic Auth                                                                                                                 |
| authPassword            | string   = undefined               | The password to use with Basic Auth                                                                                                                 |
| depth                   | integer  = undefined               | Determines how much of the git repository's history to retrieve.                                                                                    |
| since                   | Date     = undefined               | Only fetch commits created after the given date. Mutually exclusive with `depth`.                                                                   |
| exclude                 | Array\<string\> = [ ]              | A list of branches or tags. Instructs the remote server not to send us any commits reachable from these refs.                                       |
| relative                | boolean  = false                   | Changes the meaning of `depth` to be measured from the current shallow depth rather than from the branch tip.                                       |
| tags                    | boolean  = false                   | Also fetch tags                                                                                                                                     |
| emitter                 | EventEmitter = undefined           | Listeners to this EventEmitter will receive progress events.                                                                                        |
| return                  | Promise\<FetchResponse\>           | Resolves successfully when fetch completes                                                                                                          |

The object returned has the following schema:

```ts
export interface FetchResponse {
  defaultBranch: string // The branch that is cloned if no branch is specified (typically "master")
}
```
Future versions of isomorphic-git might return additional metadata.

To monitor progress, create an EventEmitter, add listeners, and pass into the function as the `emitter` argument.

| event    | type                                                                            | description                                                                     |
| -------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| message  | string                                                                          | The messages embedded in the git packfile normally displayed in the git console |
| progress | [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) | Just the numbers from those messages                                            |

Example code:

```js live
let repo = {fs, dir: '$input((.))'}
await git.fetch({
  ...repo,
  url: '$input((https://cors-buster-jfpactjnem.now.sh/github.com/isomorphic-git/isomorphic-git))',
  ref: '$input((master))',
  depth: $input((1)),
  singleBranch: $input((true)),
  tags: $input((false))
})
console.log('done')
```
