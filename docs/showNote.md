---
title: showNote
sidebar_label: showNote
---

Add a note to an existing git object

| param           | type [= default]           | description                                                                                               |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| core            | string = 'default'         | The plugin core identifier to use for plugin injection                                                    |
| fs [deprecated] | FileSystem                 | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md). |
| **dir**         | string                     | The [working tree](dir-vs-gitdir.md) directory path                                                       |
| **gitdir**      | string = join(dir, '.git') | The [git directory](dir-vs-gitdir.md) path                                                                |
| ref             | string = 'refs/notes/commits' | The ref for the note of interest                                                                       |
| oid             | string                     | The SHA-1 object id of the object the note pertains to.                                                   |
| return          | Promise\<Buffer\>          | Resolves successfully with a Buffer containing the note contents.                                         |


<script>
(function rewriteEditLink() {
  const el = document.querySelector('a.edit-page-link.button');
  if (el) {
    el.href = 'https://github.com/isomorphic-git/isomorphic-git/edit/master/src/commands/showNote.js';
  }
})();
</script>