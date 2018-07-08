---
title: Frequently Asked Questions
sidebar_label: FAQ
---

## FAQ philosophy

Most frequently asked questions will get turned into code.
For instance, ["How to get the current branch?"](/docs/currentBranch.html) and ["How to list all the files in a commit?"](/docs/listFiles.html) used to be two frequently asked questions.
So this FAQ is kind of small, because I try to address questions by improving the API whenever possible.

## Is this based on `js-git`?

_Answer by Will Hilton (@wmhilton):_

No, it is a rewrite from scratch. I basically wrote this library because I though js-git was a great idea but poorly designed for actual use.
This quote from the Q-Git documentation illustrates it best:

> JS-Git requires a certain amount of ceremony oweing to its many layers of configurability and code reuse.
> ```js
> var repo = {};
> repo.rootPath = fs.join(__dirname, "..", ".git");
> require("git-node-fs/mixins/fs-db")(repo, repo.rootPath);
> require('js-git/mixins/create-tree')(repo);
> require('js-git/mixins/pack-ops')(repo);
> require('js-git/mixins/walkers')(repo);
> require('js-git/mixins/read-combiner')(repo);
> require('js-git/mixins/formats')(repo);
> ```

That is six different modules being required *just to open a repo*.
Implementation details, like `read-combiner` and `pack-ops` are exposed.
It is so hyper-modular that the ability to open a repo in a file system is not part of the core of `js-git` but requires you to install a second package called `git-node-fs`.

While `js-git` is extremely clever, it suffers from being too ahead of its time.
It was written in 2013, before async/await and even before Node streams were very good (I believe streams2 came out right about the time js-git started) and so the codebase uses something called 'continuables' and its own stream implementation called 'min-streams'.
So right off the bat, in order to begin using the code, you have to learn two new alien/outdated concepts.
And obviously this was written in ES5 because ES6 (aka ES2015) had not come out yet.
In the years since, js-git has not changed to keep up with the JavaScript language to take advantage of things like async/await, Promises, and streams.
There was enough interest in it though that [multiple projects](https://github.com/creationix/js-git/issues/132) were spawned to create successors to js-git.
Isomorphic-git just happens to be the most mature successor.

## How does this compare with `nodegit`?

> How is isomorphic git different from nodegit?
> I understand that nodegit is just a nodeJS binding for libgit, but apart from the implementation, how are these two different, and how do I choose between which to use?
> Excluding the isomorphism

_Answer by Dan Allen (@mojavelinux) in the Gitter channel, reposted with permission:_

As a current user of nodegit who is planning to migrate to isogit, I can offer some insight into this question.
First and foremost, isogit is pure JavaScript. this is no small thing. the single biggest obstacle to using the tool I built on nodegit (named Antora) is getting nodegit installed.
Nodegit is highly system dependent and really only works without modification on Windows (since binaries are made available) and Ubuntu after installing some packages.
All other versions of Linux require that you recompile libgit2 from scratch, which takes forever.
So do not ignore how much of a pain it will be for users or even developers if you choose nodegit.
Aside from that, nodegit can only operate on a full clone. isogit already offers many more efficient paths to getting information out of the repository because it only takes what it needs.
Authentication in nodegit is also quite a disaster, imho.
Basically, it's very system dependent and authentication errors can result in segfaults due to overzealous assertions in the libgit2 C code.
Don't get me wrong, nodegit is very powerful. it offers a pretty complete git experience thanks to the fact that it uses libgit2 under the covers.
But it has a lot of warts, from installation to incomplete mapping...and I think the most viable strategy for a Node project is to be using something that is pure JavaScript...hence my personal interest and recommendation for isogit.
I'm counting the days until Antora can offer isogit as the primary git client. (i just haven't gotten around to integrating it yet).
What I like most about nodegit is probably the tree walker...that's a nice way to extract content out of a git branch.
But there's really nothing nodegit can do that isogit can't or won't be able to do...and I think isogit is in a position to be a lot more flexible since it's not coupled to another library (as nodegit is to libgit2).
I also find the isogit project to be much more friendly. @wmhilton is a great development lead.

## How does this compare with...

Here's a collection of all the other JavaScript git libraries I can find.
I haven't had time to review them all.

- https://github.com/mariusGundersen/es-git
- https://github.com/SamyPesse/gitkit-js
- https://github.com/MatrixAI/js-virtualgit
