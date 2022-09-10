// http://en.wikipedia.org/wiki/Weasel_word

var _ = require("lodash");
var tokenize = require("../tokenize");
var levels = require("../levels");
var weaselWords = require("./data/weasel");

module.exports = tokenize.check(
    tokenize.words(),

    // Filter some exceptions
    tokenize.filter(function (word, token, prev) {
        return (
            !(prev && prev.value.toLowerCase() == "too" && _.includes(weaselWords.exceptions, word)) &&
            _.includes(weaselWords.list, word.toLowerCase())
        );
    }),

    // Output warning
    tokenize.define({
        message: '"<%= value %>" is a weasel word'
    })
);
module.exports.level = levels.WARNING;
