//http://www.typescriptlang.org/Handbook#interfaces-our-first-interface-
interface LabeledValue {
    label: string;
}
function printLabel(labelObj: LabeledValue) {
    document.writeln(labelObj.label);
}

var myObj = { size: 10, label: "kim" };
printLabel(myObj);