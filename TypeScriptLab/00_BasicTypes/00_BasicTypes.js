var isDone = false;
var height = 1;
var name = "Kim";
var list = [1, 2, 3];
var list2 = [4, 5, 6];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = 2 /* Blue */;
var colorName = Color[2];

//any
var notSure = "k";
notSure = 123;
function warnUser() {
    alert("warnUser");
}
//# sourceMappingURL=00_BasicTypes.js.map
