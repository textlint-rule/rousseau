# @textlint-rule/tokenize-htmltext

Tokenize an html string into a list of text tokens, it keeps reference to indexes in the original string.

### Installation

```
$ npm install @textlint-rule/tokenize-htmltext
```

### Usage

```js
var tokenizeHTML = require('@textlint-rule/tokenize-htmltext');


var tokens = tokenizeHTML('<b>hello</b> world');

/*
[ { value: 'hello', index: 3, offset: 5 },
  { value: ' world', index: 12, offset: 6 } ]
*/
```
