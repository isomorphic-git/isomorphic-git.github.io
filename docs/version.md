---
title: version
sidebar_label: version
---
 
Return the version number of isomorphic-git

I don't know why you might need this. I added it just so I could check that I was getting
the correct version of the library and not a cached version.

| param  | type [= default] | description                                                    |
| ------ | ---------------- | -------------------------------------------------------------- |
| return | string           | the version string taken from package.json at publication time |

```js live
console.log(git.version())
```
