---
title: Authentication
sidebar_label: Authentication
---

Authentication is normally required for [`push`](./push.html)ing to a git repository.
It may also be required to [`clone`](./clone.html) or [`fetch`](./fetch.html) from a private repository.
Git does all its authentication using HTTPS Basic Authentication.
To provide the credentials, use the [onAuth](https://isomorphic-git.org/docs/en/onAuth.html) callback.
