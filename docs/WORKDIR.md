---
title: WORKDIR
sidebar_label: WORKDIR
---

Get a working directory Walker

| param           | type [= default]           | description                                                                                               |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| core            | string = 'default'         | The plugin core identifier to use for plugin injection                                                    |
| fs [deprecated] | FileSystem                 | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md). |
| **dir**         | string                     | The [working tree](dir-vs-gitdir.md) directory path                                                       |
| gitdir          | string = join(dir, '.git') | The [git directory](dir-vs-gitdir.md) path                                                                |
| return          | Walker                     | Returns a working directory Walker                                                                        |

See [walkBeta1](./walkBeta1.md)

<script>
(function rewriteEditLink() {
  const el = document.querySelector('a.edit-page-link.button');
  if (el) {
    el.href = 'https://github.com/isomorphic-git/isomorphic-git/edit/master/src/commands/WORKDIR.js';
  }
})();
</script>