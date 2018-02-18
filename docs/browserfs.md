---
title: BrowserFS Primer
sidebar_label: BrowserFS Primer
---

## What is BrowserFS?

> BrowserFS is an in-browser filesystem that emulates the Node JS filesystem API and supports storing and retrieving files from various backends.

Each of the commands exported by isomorphic-git take an `fs` argument that represents the file system.
This makes it easier to use isomorphic-git in different environments, where you may or may not have a "real" filesystem to work with.
So technically, isomorphic-git is BYOFS (Bring-Your-Own-File-System).
However, there are two "officially" supported filesystems.
One is the Node.js 'fs' module.
The other is BrowserFS. So I thought a brief introduction to BrowserFS might be in order.

## Setup

Before you can use the "filesystem" you must configure it.
LocalStorage is the easiest, but there are many others including
InMemory, IndexedDB, HTTPRequest, and even Dropbox.

Code to do it:
```js
const BrowserFS = require("browserfs");
BrowserFS.install(window);
BrowserFS.configure(
  { fs: "LocalStorage" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    window.fs = window.require("fs");
  }
});
```

(This code ran when the page loaded.)


## Write content to a file

```js
let text = `$textarea((Hello World!))`;
fs.writeFile('$input((filename.txt))', text, 'utf8',  err => {
  if (err) {
    console.log(err);
  } else {
    console.log("success!");
  }
});
```

## List files in a directory

```js
let dir = '$input((/))'; // Hint: try reading the root directory '/'
fs.readdir(dir, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files.join(", "));
  }
});
```

## Read a file

```js
let filename = '$input((filename.txt))'; // (hint: use the file you wrote earlier)
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```

## Learn more

You can of course make directories too. In fact, the entire 'fs' API is available. Some backends even support symlinks!

You could use BrowserFS to add offline support for you app. Or allow saving projects and settings locally. Or to enable applications that normally need a filesystem to run in the browser. The possibilities are limitless!

Github: https://github.com/jvilk/BrowserFS

Website / docs: http://jvilk.com/browserfs/1.4.1/

Node.js 'fs' API: https://nodejs.org/api/fs.html
