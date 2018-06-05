[![Build Status](https://travis-ci.com/fadedDexofan/dvach.js.svg?branch=master)](https://travis-ci.com/fadedDexofan/dvach.js)
[![Coverage Status](https://coveralls.io/repos/github/fadedDexofan/dvach.js/badge.svg?branch=master)](https://coveralls.io/github/fadedDexofan/dvach.js?branch=master)
[![GitHub issues](https://img.shields.io/github/issues/fadedDexofan/dvach.js.svg)](https://github.com/fadedDexofan/dvach.js/issues)
[![GitHub stars](https://img.shields.io/github/stars/fadedDexofan/dvach.js.svg)](https://github.com/fadedDexofan/dvach.js/stargazers)
[![npm downloads](https://img.shields.io/npm/dy/dvach.js.svg)](https://www.npmjs.com/package/dvach.js)
[![npm version](https://badge.fury.io/js/dvach.js.svg)](https://badge.fury.io/js/dvach.js)

# dvach.js

Node.JS 2ch.hk API Wrapper

# Installation

To install you simply need execute:

    $ npm install dvach.js

Or this command, if you prefer [Yarn](https://yarnpkg.com/lang/en/)

    $ yarn add dvach.js

# Example usage

```javascript
const DvachApi = require("dvach.js");

DvachApi.getBoard("b")
  .then((threads) => {
    console.log(threads);
  })
  .catch((err) => {
    // error processing
  });
```

# Available methods

- getBoard(board)

- getThread(board, threadNum)

- getPage(board, pageNumber)

- getTop(board, sortMethod, numOfThreads)

# Running the tests

To run the test suites, type in your terminal

    $ npm run test

# Contributing

Open for pull requests!

# Authors

- [fadedDexofan](https://github)
