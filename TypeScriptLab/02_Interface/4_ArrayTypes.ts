//http://www.typescriptlang.org/Handbook#interfaces-array-types
interface StringArray {
    [index: number]: string;
}

interface Dictionary {
    [index: string]: string;
}
var myArray: StringArray;
myArray = ["Bob", "Kim"];

var dict: Dictionary;
dict = { a: "1", b: "2" };
alert(dict["a"]);
