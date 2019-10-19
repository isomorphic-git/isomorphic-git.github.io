---
title: TREE
sidebar_label: TREE
---

Get a git commit `Walker`

| param  | type [= default] | description                 |
| ------ | ---------------- | --------------------------- |
| ref    | string = 'HEAD'  | The commit to walk          |
| return | Walker           | Returns a git commit Walker |

See [walkBeta2](./walkBeta2.md)

<script>
(function rewriteEditLink() {
  const el = document.querySelector('a.edit-page-link.button');
  if (el) {
    el.href = 'https://github.com/isomorphic-git/isomorphic-git/edit/master/src/commands/TREE.js';
  }
})();
</script>