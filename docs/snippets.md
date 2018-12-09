---
title: Useful Code Snippets
sidebar_label: Useful Snippets
---

Looking for useful code snippets? Look right here! Have a useful code snippet? Add it to the collection! (Click the Edit button in the top right of the page.)

All snippets are published under the MIT License.

## git add --no-all .

```js
const globby = require('globby');
const paths = await globby(['./**', './**/.*'], { gitignore: true });
for (const filepath of paths) {
    await git.add({ fs, dir, filepath });
}
```

## git add -A .

```js
await git.statusMatrix(repo).then((status) =>
    Promise.all(
        status.map(([filepath, , worktreeStatus]) =>
            // isomorphic-git may report a changed file as unmodified, so always add if not removing
            worktreeStatus ? git.add({ ...repo, filepath }) : git.remove({ ...repo, filepath })
        );
    );
);
```
