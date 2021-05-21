"use strict";
// enum Response {
//   NO = 0,
//   Yes = 1
// }
// enum Direction {
//   NO = 0,
//   Up = 'Upsss'
// }
// enum E {
//   X
// }
// 数字枚举
var Responses;
(function (Responses) {
    Responses[Responses["NO"] = 0] = "NO";
    Responses[Responses["Yes"] = 1] = "Yes";
})(Responses || (Responses = {}));
function respond(recipient, message) {
    console.log(message);
}
respond('ss', Responses.NO);
// 字符串枚举
// 异构枚举
// 计算的和常量成员
// 常量
/*
  1.枚举的第一个成员，且没有初始化器， 被赋值为：0
  enum E1
    x
  }
  2.不带有初始化器，且他之前的成员是一个数字常量
  enum E2 {
    x = 1,
    y,
    z
  }
  3. 枚举成员使用常量枚举表达式初始化

 */
var E2;
(function (E2) {
    E2[E2["x"] = 1] = "x";
    E2[E2["y"] = 2] = "y";
    E2[E2["z"] = 3] = "z";
})(E2 || (E2 = {}));
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["G"] = '123'.length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(E2);
// 联合枚举和枚举成员的类型
// 当所有枚举成员拥有字面量枚举时，它就带有一种特殊的语义
// 1.枚举成员成为了类型
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Circle,
    Radius: 10
};
// 联合枚举
var E3;
(function (E3) {
    E3[E3["Foo"] = 0] = "Foo";
    E3[E3["Bar"] = 1] = "Bar";
})(E3 || (E3 = {}));
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
console.log(1 /* Down */);
// 外部枚举
var E5;
(function (E5) {
    E5[E5["A"] = 1] = "A";
    E5[E5["B"] = 2] = "B";
    E5[E5["C"] = 2] = "C";
})(E5 || (E5 = {}));
console.log(E5);
// window.onmousedown = function(mouseEvent) {
//   console.log(mouseEvent.button);  //<- Error
// };
