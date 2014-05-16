//http://www.typescriptlang.org/Handbook#interfaces-optional-properties
//此範例著重在介面的屬性可以是Optional
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {//:後為return 型別
    var newSquare = { color: "white", area: 100 };
    if (config.color)
        newSquare.color = config.color;
    if (config.width)
        newSquare.area = config.width * newSquare.area;

    return newSquare;
}
var mySquare = createSquare({ color: "black" });