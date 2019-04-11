---
title: TREE
sidebar_label: TREE
---

Get a git commit Walker

| param           | type [= default]           | description                                                                                               |
| --------------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| core            | string = 'default'         | The plugin core identifier to use for plugin injection                                                    |
| fs [deprecated] | FileSystem                 | The filesystem containing the git repo. Overrides the fs provided by the [plugin system](./plugin_fs.md). |
| dir             | string                     | The [working tree](dir-vs-gitdir.md) directory path                                                       |
| **gitdir**      | string = join(dir, '.git') | The [git directory](dir-vs-gitdir.md) path                                                                |
| **ref**         | string = 'HEAD'            | The commit to walk                                                                                        |
| return          | Walker                     | Returns a git commit Walker                                                                               |

See [walkBeta1](./walkBeta1.md)
