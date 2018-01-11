---
title: verify
sidebar_label: verify
---

Verify a signed commit

| param                   | type [= default]                 | description                                                                                                                                         |
| ----------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fs**, **dir**, gitdir | FSModule, string, string         | The filesystem holding the git repo, the [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **ref**                 | string                           | A reference to the commit to verify                                                                                                                 |
| **publicKeys**          | string                           | A PGP public key in ASCII armor format.                                                                                                             |
| return                  | Promise\<false/Array\<string\>\> | The key ids used to sign the commit, in hex format.                                                                                                 |

It is up to you to figure out what the commit's public key *should* be.
I would use the "author" or "committer" name and email, and look up
that person's public key from a trusted source such as the Github API.

The function returns false if any of the signatures on a signed git commit are invalid.
Otherwise, it returns an array of the key ids that were used to sign it.

The `publicKeys` argument is a single string in ASCII armor format. However, it is plural "keys" because
you can technically have multiple public keys in a single ASCII armor string. While I haven't tested it, it
should support verifying a single commit signed with multiple keys. Hence why the returned result is an array of key ids.

```js
let repo = {fs, dir: '.'}
let keyids = await git.verify({
  ...repo,
  ref: '<@HEAD@>',
  publicKeys: `<<@
-----BEGIN PGP PUBLIC KEY BLOCK-----
...
@>>`
})
console.log(keyids)
```