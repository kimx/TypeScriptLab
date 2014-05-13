var Greeter = (function () {
    function Greeter(greetingString) {
        this.greetingString = greetingString;
    }
    Greeter.prototype.Hello = function () {
        document.writeln(this.greetingString);
    };
    return Greeter;
})();
//# sourceMappingURL=01_Helloworld.js.map
