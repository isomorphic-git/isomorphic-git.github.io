---
title: Useful Code Snippets
sidebar_label: Useful Snippets
---

Looking for useful code snippets? Look right here! Have a useful code snippet? Add it to the collection! (Click the Edit button in the top right of the page.)

All snippets are published under the MIT License.

## git add -a

```js
const globby = require('globby');
const paths = await globby(['./**', './**/.*'], { gitignore: true });
for (const filepath of paths) {
    await git.add({ fs, dir, filepath });
}
```
