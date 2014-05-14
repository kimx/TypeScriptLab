module ModuleClass {
    export class MyClass {
        constructor(public name: string) { }
        hello() {
            alert(this.name);
        }
    }
}
//
module ModuleFunc {
    function init(name: string) {
        this.name = name;
    }
    function hello() {
        
        alert(this.name);
    }
    return init;
}
//
module ModulePara {
    var init = { name: "", age: 19 };
    function hello() {
        alert("kim");
    };
    return { hello: hello, initObj: init };
 
}