class greeterClass {
    name: string;
    constructor(s: string) {
        this.name = s;
    }
    hello() {
        document.writeln(this.name);
    }
}

var g = new greeterClass("Kim");
g.hello();