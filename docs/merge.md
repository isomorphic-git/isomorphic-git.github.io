---
title: merge
sidebar_label: merge
---

Merge one or more branches *(Currently, only fast-forward merges are implemented.)*

| param           | type [= default]          | description                                                                                               |
| --------------- | ------------------------- | --------------------------------------------------------------------------------------------------------- |
| core            | string = 'default'        | The plugin core identifier to use for plugin injection                                                    |
| fs [deprecated] | FileSystem                | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md). |
| dir             | string                    | The [working tree](dir-vs-gitdir.md) directory path                                                       |
| **gitdir**      | string = join(dir,'.git') | The [git directory](dir-vs-gitdir.md) path                                                                |
| ours            | string                    | The branch receiving the merge. If undefined, defaults to the current branch.                             |
| **theirs**      | string                    | The branch to be merged                                                                                   |
| fastForwardOnly | boolean = false           | If true, then non-fast-forward merges will throw an Error instead of performing a merge.                  |
| dryRun          | boolean = false           | If true, simulates a merge so you can test whether it would succeed.                                      |
| return          | Promise\<MergeReport\>    | Resolves to a description of the merge operation                                                          |

Returns an object with a schema like this:

```ts
type MergeReport = {
  oid: string; // The SHA-1 object id that is now at the head of the branch
  alreadyMerged?: boolean; // True if the branch was already merged so no changes were made
  fastForward?: boolean; // True if it was a fast-forward merge
}
```

Example Code:

```js live
let m = await git.merge({ dir: '$input((/))', ours: '$input((master))', theirs: '$input((remotes/origin/master))' })
console.log(m)
```

<script>
(function rewriteEditLink() {
  const el = document.querySelector('a.edit-page-link.button');
  if (el) {
    el.href = 'https://github.com/isomorphic-git/isomorphic-git/edit/master/src/commands/merge.js';
  }
})();
</script>