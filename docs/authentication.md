---
title: Authentication
sidebar_label: Authentication
---

Authentication is normally required for [`push`](./push.html)ing to a git repository.
It may also be required to [`clone`](./clone.html) or [`fetch`](./fetch.html) from a private repository.
Git does all its authentication using HTTPS Basic Authentication.
iomorphic-git supports multiple strategies for authentication.

## Using `username` and `password`
To authenticate based on username and password, you need to return `username` and `password` from the `onAuth` callback. Example, in case of `push`ing:

```js
await git.push({
 ...   
 onAuth: url => {
    return {username: 'your_username', password: 'your_password'}
},
 ...
})
```

## Using PATs

If you have two-factor authentication (2FA) enabled on your account, you
probably cannot push or pull using your regular username and password.
Instead, you may have to create a Personal Access Token (or an App Password in Bitbucket lingo) and use that to authenticate.
( [Instructions for GitHub](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
| [Instructions for Bitbucket](https://confluence.atlassian.com/bitbucket/app-passwords-828781300.html)
| [Instructions for GitLab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
)

```js
await git.push({
 ...
onAuth: url => {
    return {username: 'your_username', password: 'your_token'}
},
 ...
})
```

More info about using the `onAuth` callback and the different strategies it supports can be found on [its documentation page](https://isomorphic-git.org/docs/en/onAuth).