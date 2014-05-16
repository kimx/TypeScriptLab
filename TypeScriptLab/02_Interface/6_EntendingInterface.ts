//http://www.typescriptlang.org/Handbook#interfaces-extending-interfaces
//介面可以再擴充多個介面
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}



var s: Square;
s.color = "Red";
s.sideLength = 100;
s.penWidth = 30;
