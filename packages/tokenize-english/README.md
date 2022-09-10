# @textlint-rule/tokenize-english

[![Build Status](https://travis-ci.org/GitbookIO/tokenize-english.png?branch=master)](https://travis-ci.org/GitbookIO/tokenize-english)
[![NPM version](https://badge.fury.io/js/tokenize-english.svg)](http://badge.fury.io/js/tokenize-english)

Javascript tokenizer for english sentences.


### Installation

```
$ npm install @textlint-rule/tokenize-english
```

### Usage

```js
var tokenize = require('@textlint-rule/tokenize-text')();
var tokenizeEnglish = require('@textlint-rule/tokenize-english')(tokenize);

var tokens = tokenizeEnglish.sentences("On Jan. 20, former Sen. Barack Obama became the 44th President of the U.S. Millions attended the Inauguration.")

/*
[ { index: 0,
    value: 'On Jan. 20, former Sen. Barack Obama became the 44th President of the U.S.',
    offset: 74 },
  { index: 74,
    value: ' Millions attended the Inauguration.',
    offset: 36 } ]
*/
```

