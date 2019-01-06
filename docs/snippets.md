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

## Use native git credential manager

Adapted from the [Antora docs](https://gitlab.com/antora/antora/blob/master/docs/modules/playbook/pages/private-repository-auth.adoc):

```js
const git = require('isomorphic-git')
const { spawn } = require('child_process')
const { URL } = require('url')

const systemGitCredentialManager = {
  async fill ({ url }) {
    const { protocol, host } = new URL(url)
    return new Promise((resolve, reject) => {
      const output = []
      const process = spawn('git', ['credential', 'fill'])
      process.on('close', (code) => {
        if (code) return reject(code)
        const { username, password } = output.join('\n').split('\n').reduce((acc, line) => {
          if (line.startsWith('username') || line.startsWith('password')) {
            const [ key, val ] = line.split('=')
            acc[key] = val
          }
          return acc
        }, {})
        resolve({ username, password })
      })
      process.stdout.on('data', (data) => output.push(data.toString().trim()))
      process.stdin.write(`protocol=${protocol.slice(0, -1)}\nhost=${host}\n\n`)
    })
  },
  async approved ({ url }) {},
  async rejected ({ url, auth }) {
    const data = { statusCode: 401, statusMessage: 'HTTP Basic: Access Denied' }
    const err = new Error(`HTTP Error: ${data.statusCode} ${data.statusMessage}`)
    err.name = err.code = 'HTTPError'
    err.data = data
    err.rejected = !!auth
    throw err
  },
}

git.plugins.set('credentialManager', systemGitCredentialManager)
```

## GitHub Pages deploy script
```js
// website/scripts/deploy-gh-pages.js
const path = require('path')
const fs = require('fs')
const git = require('isomorphic-git')
git.plugins.set('fs', fs)

// PARAMETERS - CHANGE THESE FOR YOUR CODE
let url = 'https://github.com/isomorphic-git/isomorphic-git.github.io'
let sourceDir = path.join(__dirname, '../..')
let buildDir = path.join(sourceDir, 'website/build/isomorphic-git.github.io')

;(async () => {
  dir = sourceDir
  let commit = await git.log({ dir, depth: 1 })
  commit = commit[0]
  let message = commit.message

  dir = buildDir
  await git.init({ dir })
  await git.addRemote({ dir, url, remote: 'origin' })
  await git.fetch({ dir, ref: 'master', depth: 1 })
  await git.checkout({ dir, ref: 'master', noCheckout: true })
  await git.add({ dir, filepath: '.' })
  await git.commit({ dir, author: commit.author, message: commit.message })
  await git.push({ dir, oauth2format: 'github', token: process.env.GITHUB_TOKEN })
})()
```
