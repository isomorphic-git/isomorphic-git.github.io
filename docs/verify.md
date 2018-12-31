---
title: verify
sidebar_label: verify
---

Verify a signed commit

| param           | type [= default]                 | description                                                                                                    |
| --------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule                         | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string                   | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **openpgp**     | OpenPGP interface                | An instance of the [OpenPGP library](https://unpkg.com/openpgp@2.6.2).                                         |
| **ref**         | string                           | A reference to the commit or tag to verify                                                                     |
| **publicKeys**  | string                           | A PGP public key in ASCII armor format.                                                                        |
| return          | Promise\<false/Array\<string\>\> | The key ids used to sign the commit, in hex format.                                                            |

<aside>
OpenPGP.js is unfortunately licensed under the LGPL-3.0 and thus cannot be included in a minified bundle with
isomorphic-git which is an MIT/BSD style library, because that would violate the "dynamically linked" stipulation.
To use this feature you include openpgp with a separate script tag and pass it in as an argument.
</aside>

It is up to you to figure out what the commit's public key should be.
I would use the "author" or "committer" name and email, and look up
that person's public key from a trusted source such as the GitHub API.

The function returns `false` if any of the signatures on a signed git commit are invalid.
Otherwise, it returns an array of the key ids that were used to sign it.

The `publicKeys` argument is a single string in ASCII armor format. However, it is plural "keys" because
you can technically have multiple public keys in a single ASCII armor string. While I haven't tested it, it
should support verifying a single commit signed with multiple keys. Hence why the returned result is an array of key ids.

```js live
let keyids = await git.verify({
  dir: '$input((/))',
  openpgp,
  ref: '$input((HEAD))',
  publicKeys: `$textarea((
-----BEGIN PGP PUBLIC KEY BLOCK-----
...
))`
})
console.log(keyids)
```
