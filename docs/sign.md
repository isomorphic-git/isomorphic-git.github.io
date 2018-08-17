---
title: sign
sidebar_label: sign
---

Create a signed commit

| param           | type [= default]  | description                                                                                                    |
| --------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| fs [deprecated] | FSModule          | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).      |
| **dir**, gitdir | string, string    | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path |
| **openpgp**     | OpenPGP interface | An instance of the [OpenPGP library](https://unpkg.com/openpgp@2.6.2).                                         |
| **privateKeys** | string            | A PGP private key in ASCII armor format.                                                                       |
| return          | Promise\<string\> | Resolves successfully with the object ID of the newly created commit.                                          |

<aside>
OpenPGP.js is unfortunately licensed under the LGPL-3.0 and thus cannot be included in a minified bundle with
isomorphic-git which is an MIT/BSD style library, because that would violate the "dynamically linked" stipulation.
To use this feature you include openpgp with a separate script tag and pass it in as an argument.
</aside>

It creates a signed version of whatever commit HEAD currently points to, and then updates the current branch,
leaving the original commit dangling.

The `privateKeys` argument is a single string in ASCII armor format. However, it is plural "keys" because
you can technically have multiple private keys in a single ASCII armor string. The openpgp.sign() function accepts
multiple keys, so while I haven't tested it, it should support signing a single commit with multiple keys.

```js live
let sha = await git.sign({
  dir: '$input((.))',
  openpgp,
  privateKeys: `$textarea((
-----BEGIN PGP PRIVATE KEY BLOCK-----
...
))`
})
console.log(sha)
```