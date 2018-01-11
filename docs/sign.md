---
title: sign
sidebar_label: sign
---

Create a signed commit

| param                   | type [= default]         | description                                                                                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **privateKeys**         | string                   | A PGP private key in ASCII armor format.                                                                                                            |
| return                  | Promise\<string\>        | Resolves successfully with the object ID of the newly created commit.                                                                               |

OpenPGP.js is a huge library and if you don't need to create or verify signed commits
you shouldn't be forced to include that weighty feature in your bundle. That's why this
is its own function.

It creates a signed version of whatever commit HEAD currently points to, and then updates the current branch,
leaving the original commit dangling.

The {@link privateKeys} argument is a single string in ASCII armor format. However, it is plural "keys" because
you can technically have multiple private keys in a single ASCII armor string. The openpgp.sign() function accepts
multiple keys, so while I haven't tested it, it should support signing a single commit with multiple keys.

```js
let repo = {fs, dir: '<@.@>'}
let sha = await git.sign({
  ...repo,
  privateKeys: `<<@
-----BEGIN PGP PRIVATE KEY BLOCK-----
...
@>>`
})
console.log(sha)
```