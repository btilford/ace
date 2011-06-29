define(function(require, exports, module) {

var oop = require("pilot/oop");
var JavaMode = require("ace/mode/java").Mode;
var Tokenizer = require("ace/tokenizer").Tokenizer;
var GroovyHighlightRules = require("ace/mode/groovy_highlight_rules").GroovyHighlightRules;
var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;
var CstyleBehaviour = require("ace/mode/behaviour/cstyle").CstyleBehaviour;

var Mode = function() {
    this.$tokenizer = new Tokenizer(new GroovyHighlightRules().getRules());
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
