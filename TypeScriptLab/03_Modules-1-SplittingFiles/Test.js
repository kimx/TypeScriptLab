var strings = ['Hello', '98052', '101'];
var validators = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        document.writeln('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name + "<br>");
    }
});
//# sourceMappingURL=Test.js.map
