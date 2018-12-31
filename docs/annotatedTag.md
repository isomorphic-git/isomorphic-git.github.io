---
title: annotatedTag
sidebar_label: annotatedTag
---

Create an annotated tag

| param                 | type [= default]   | description                                                                                                                                                         |
| --------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fs [deprecated]       | FSModule           | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).                                                           |
| **dir**, gitdir       | string, string     | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path                                                      |
| **ref**               | string             | What to name the tag                                                                                                                                                |
| message               | string = ''        | The tag message to use.                                                                                                                                             |
| object                | string = 'HEAD'    | What oid the tag refers to. (Will resolve to oid if value is a ref.) By default, the commit object which is referred by the current `HEAD` is used.                 |
| tagger                | Object = undefined | The details about the tagger.                                                                                                                                       |
| tagger.name           | string = undefined | Default is `user.name` config.                                                                                                                                      |
| tagger.email          | string = undefined | Default is `user.email` config.                                                                                                                                     |
| tagger.date           | Date = new Date()  | Set the tagger timestamp field. Default is the current date.                                                                                                        |
| tagger.timestamp      | number = undefined | Set the tagger timestamp field. This is an alternative to using `date` using an integer number of seconds since the Unix epoch instead of a JavaScript date object. |
| tagger.timezoneOffset | number = undefined | Set the tagger timezone offset field. This is the difference, in minutes, from the current timezone to UTC. Default is `(new Date()).getTimezoneOffset()`.          |
| signature             | string = undefined | The signature attatched to the tag object. (Mutually exclusive with the `signingKey` option.)                                                                       |
| signingKey            | string = undefined | Sign the tag object using this private PGP key. (Mutually exclusive with the `signature` option.)                                                                   |
| force                 | boolean = false    | Instead of throwing an error if a tag named `ref` already exists, overwrite the existing tag. Note that this option does not modify the original tag object itself. |
| return                | Promise\<void\>    | Resolves successfully when filesystem operations are complete                                                                                                       |

```js live
await git.annotatedTag({
  dir: '$input((/))',
  ref: '$input((test-tag))',
  message: '$input((This commit is awesome))',
  tagger: {
    name: '$input((Mr. Test))',
    email: '$input((mrtest@example.com))'
  }
})
console.log('done')
```
