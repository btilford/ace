define(function(require, exports, module) {

var oop = require("pilot/oop");
var JavaMode = require("ace/mode/java").Mode;
var Tokenizer = require("ace/tokenizer").Tokenizer;
var FantomHighlightRules = require("ace/mode/fantom_highlight_rules").FantomHighlightRules;
var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;
var CstyleBehaviour = require("ace/mode/behaviour/cstyle").CstyleBehaviour;

var Mode = function() {
    this.$tokenizer = new Tokenizer(new FantomHighlightRules().getRules());
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
};
oop.inherits(Mode, JavaMode);

(function() {
    
    this.createWorker = function(session) {
        return null;
    };

}).call(Mode.prototype);

exports.Mode = Mode;
});
