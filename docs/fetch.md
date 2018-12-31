---
title: fetch
sidebar_label: fetch
---

Fetch commits from a remote repository

| param                                   | type [= default]                              | description                                                                                                    |
| --------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated]                         | FSModule                                      | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir                         | string, string                                | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| username, password, token, oauth2format | string,&nbsp;string,&nbsp;string,&nbsp;string | See the [Authentication](./authentication.html) documentation                                                  |
| url                                     | string   = undefined                          | The URL of the remote repository. Will be gotten from gitconfig if absent.                                     |
| corsProxy                               | string = undefined                            | Optional [CORS proxy](https://www.npmjs.com/@isomorphic-git/cors-proxy). Overrides value in repo config.       |
| ref                                     | string   = 'HEAD'                             | Which branch to fetch. By default this is the currently checked out branch.                                    |
| singleBranch                            | bool     = false                              | Instead of the default behavior of fetching all the branches, only fetch a single branch.                      |
| noGitSuffix                             | bool     = false                              | If true, clone will not auto-append a `.git` suffix to the `url`. (**AWS CodeCommit needs this option**)       |
| remote                                  | string   = 'origin'                           | What to name the remote that is created. The default is 'origin'.                                              |
| depth                                   | integer  = undefined                          | Determines how much of the git repository's history to retrieve.                                               |
| since                                   | Date     = undefined                          | Only fetch commits created after the given date. Mutually exclusive with `depth`.                              |
| exclude                                 | Array\<string\> = [ ]                         | A list of branches or tags. Instructs the remote server not to send us any commits reachable from these refs.  |
| relative                                | boolean  = false                              | Changes the meaning of `depth` to be measured from the current shallow depth rather than from the branch tip.  |
| tags                                    | boolean  = false                              | Also fetch tags                                                                                                |
| headers                                 | object = {}                                   | Additional headers to include in HTTP requests, similar to git's `extraHeader` config                          |
| emitter [deprecated]                    | EventEmitter = undefined                      | Overrides the emitter set via the ['emitter' plugin](./plugin_emitter.md).                                     |
| emitterPrefix                           | string = ''                                   | Scope emitted events by prepending `emitterPrefix` to the event name.                                          |
| return                                  | Promise\<FetchResponse\>                      | Resolves successfully when fetch completes                                                                     |

The object returned has the following schema:

```ts
export interface FetchResponse {
  defaultBranch: string // The branch that is cloned if no branch is specified (typically "master")
}
```
Future versions of isomorphic-git might return additional metadata.

To monitor progress events, see the documentation for the [`'emitter'` plugin](./plugin_emitter.md).

Example code:

```js live
await git.fetch({
  dir: '$input((/))',
  corsProxy: 'https://cors.isomorphic-git.org',
  url: '$input((https://github.com/isomorphic-git/isomorphic-git))',
  ref: '$input((master))',
  depth: $input((1)),
  singleBranch: $input((true)),
  tags: $input((false))
})
console.log('done')
```
