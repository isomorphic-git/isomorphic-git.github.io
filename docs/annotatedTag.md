---
title: tag
sidebar_label: tag
---

Create an annotated tag

| param                        | type [= default]   | description                                                                                                                                                                                                                      |
| ---------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fs [deprecated]              | FSModule           | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md).                                                                                                                        |
| **dir**, gitdir              | string, string     | The [working tree](dir-vs-gitdir.md) directory path, and optionally the [git directory](dir-vs-gitdir.md) path                                                                                                                   |
| **name**                     | string             | What to name the tag                                                                                                                                                                                                             |
| **object**                   | Object             | The details about the tag object.                                                                                                                                                                                                |
| **object.message**           | string             | The tag message to use.                                                                                                                                                                                                          |
| object.object                | string = undefined | What object the tag object refers to. Also accepts a ref. By default, the commit object which is referred by the current `HEAD` is used.                                                                                         |
| object.tagger                | Object = undefined | The details about the tagger.                                                                                                                                                                                                    |
| object.tagger.name           | string = undefined | Default is `user.name` config.                                                                                                                                                                                                   |
| object.tagger.email          | string = undefined | Default is `user.email` config.                                                                                                                                                                                                  |
| object.tagger.date           | Date = new Date()  | Set the tagger timestamp field. Default is the current date.                                                                                                                                                                     |
| object.tagger.timestamp      | number = undefined | Set the tagger timestamp field. This is an alternative to using `date` using an integer number of seconds since the Unix epoch instead of a JavaScript date object.                                                              |
| object.tagger.timezoneOffset | number = undefined | Set the tagger timezone offset field. This is the difference, in minutes, from the current timezone to UTC. Default is `(new Date()).getTimezoneOffset()`.                                                                       |
| object.signature             | string = undefined | The signature attatched to the tag object. This is useful when you want to reconstruct a real tag object from a JSON object which was yielded by other APIs, such as `readObject`. This option cannot be used with `signingKey`. |
| signingKey                   | string = undefined | Sign the tag object using this private PGP key. This option cannot be used with `object.signature`.                                                                                                                              |
| force                        | boolean = false    | Instead of throwing an error if a tag named `name` already exists, overwrite the existing tag. Note that this option does not modify the existing tag object.                                                                    |
| return                       | Promise\<void\>    | Resolves successfully when filesystem operations are complete                                                                                                                                                                    |

```js live
await git.tag({
  dir: '$input((.))',
  name: '$input((test-tag))',
  annotated: {
    message: '$input((This commit is awesome))',
    tagger: {
      name: '$input((Mr. Test))',
      email: '$input((mrtest@example.com))'
    }
  }
})
```
