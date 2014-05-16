//http://www.typescriptlang.org/Handbook#interfaces-function-types
//說明介面也可以定義Function
interface SearchFunc {
    (source: string, subString: string): boolean;
}
var mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    var result = source.search(subString);
    if (result == -1)
        return false;
    return true;
}
