---
title: add
sidebar_label: add
---

Add a file to the git index (aka staging area)

 * @param {Object} args - Arguments object
 * @param {FSModule} args.fs - The filesystem holding the git repo
 * @param {string} args.dir - The path to the [working tree](index.html#dir-vs-gitdir) directory
 * @param {string} [args.gitdir=path.join(dir, '.git')] - The path to the [git directory](index.html#dir-vs-gitdir)
 * @param {string} args.filepath - The path to the file to add to the index.
 * @returns {Promise<void>} - Resolves successfully once the git index has been updated.


 ```js
 let repo = {fs, dir: '<@.@>'}
 await new Promise((resolve, reject) => fs.writeFile(
   '<@README.md@>',
   `<<@# TEST@>>`,
   (err) => err ? reject(err) : resolve()
 ))
 await git.add({...repo, filepath: '<@README.md@>'})
 console.log('done')
 ```