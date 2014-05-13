﻿define(["require", "exports"], function(require, exports) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    })();
    exports.LettersOnlyValidator = LettersOnlyValidator;
});
//# sourceMappingURL=LettersOnlyValidator.js.map