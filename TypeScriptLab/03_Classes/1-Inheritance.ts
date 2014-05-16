class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(meters: number) {
        document.writeln(this.name + " moved " + meters + "m.<br>");
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move() {
        document.writeln("Slithering.....<br>");
        super.move(5);
    }
}
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move() {
        document.writeln("Galloping....<br>");
        super.move(50);
    }
}

var sam = new Snake("sam");
sam.move();

var tom = new Horse("tom");
tom.move();