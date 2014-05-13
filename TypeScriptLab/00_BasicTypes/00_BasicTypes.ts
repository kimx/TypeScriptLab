var isDone: boolean = false;
var height: number = 1;
var name: string = "Kim";
var list: number[] = [1, 2, 3];
var list2: Array<number> = [4, 5, 6];
enum Color { Red, Green, Blue };
var c: Color = Color.Blue;
var colorName: string = Color[2];
//any
var notSure: any = "k";
notSure = 123;
function warnUser() {
    alert("warnUser");
}