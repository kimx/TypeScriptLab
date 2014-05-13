var ModuleClass;
(function (ModuleClass) {
    var MyClass = (function () {
        function MyClass(name) {
            this.name = name;
        }
        MyClass.prototype.hello = function () {
            alert(this.name);
        };
        return MyClass;
    })();
    ModuleClass.MyClass = MyClass;
})(ModuleClass || (ModuleClass = {}));

//
var ModuleFunc;
(function (ModuleFunc) {
    function init(name) {
        this.name = name;
    }
    function hello() {
        alert(this.name);
    }
    return init;
})(ModuleFunc || (ModuleFunc = {}));

//
var ModulePara;
(function (ModulePara) {
    var init = { name: "", age: 19 };
    function hello() {
        alert("kim");
    }
    ;
    return { hello: hello, initObj: init };
})(ModulePara || (ModulePara = {}));
//# sourceMappingURL=03_Modules-0-Basic.js.map
