---
title: init
sidebar_label: init
---

Initialize a new repository

 * @param {Object} args - Arguments object
 * @param {FSModule} args.fs - The filesystem holding the git repo
 * @param {string} args.dir - The path to the [working tree](index.html#dir-vs-gitdir) directory
 * @param {string} [args.gitdir=path.join(dir, '.git')] - The path to the [git directory](index.html#dir-vs-gitdir)
 * @returns {Promise<void>} - Resolves successfully when filesystem operations are complete.

```
let repo = {fs, dir: '<@.@>'}
await git.init(repo)
console.log('done')
```