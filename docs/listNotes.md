---
title: listNotes
sidebar_label: listNotes
---

Add a note to an existing git object

| param           | type [= default]           | description                                                                                               |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| core            | string = 'default'         | The plugin core identifier to use for plugin injection                                                    |
| fs [deprecated] | FileSystem                 | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md). |
| **dir**         | string                     | The [working tree](dir-vs-gitdir.md) directory path                                                       |
| **gitdir**      | string = join(dir, '.git') | The [git directory](dir-vs-gitdir.md) path                                                                |
| ref             | string = 'refs/notes/commits' | The ref to list the note under                                                                         |
| oid             | string                     | The SHA-1 object id of the object to list the note for. If omitted, entries for all notes are returned. |
| return          | Promise\<[Object]\>        | Resolves successfully with an array of entries containing path and oid matching the request.              |


<script>
(function rewriteEditLink() {
  const el = document.querySelector('a.edit-page-link.button');
  if (el) {
    el.href = 'https://github.com/isomorphic-git/isomorphic-git/edit/master/src/commands/listNotes.js';
  }
})();
</script>