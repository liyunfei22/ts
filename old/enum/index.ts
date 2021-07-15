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
enum Responses {
  NO,
  Yes
}
function respond (recipient: string, message: Responses) {
  console.log(message)
}
respond('ss', Responses.NO)
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
enum E2 {
  x = 1,
  y,
  z
}
enum FileAccess {
  None,
  Read = 1<< 1,
  Write = 1 << 2,
  G = '123'.length
}
console.log(E2)
// 联合枚举和枚举成员的类型
// 当所有枚举成员拥有字面量枚举时，它就带有一种特殊的语义
// 1.枚举成员成为了类型
enum ShapeKind {
  Circle,
  Square,
}
interface Circle {
  kind: ShapeKind.Circle;
  Radius: number
}
interface Square {
  kind: ShapeKind.Square;
  sindeLenth: number
}
let c:Circle = {
  kind: ShapeKind.Circle,
  Radius: 10
}
// 联合枚举
enum E3 {
  Foo,
  Bar
}
// function f(x: E3) {
//   if(x !== E3.Foo || x !== E3.Bar) {

//   }
// }
// 运行时枚举
// 枚举时运行时真正存在的对象
// 反向映射
// 常量枚举
const enum E4 {
  Up,
  Down
}
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

console.log(E4.Down)
// 外部枚举
enum E5{
  A = 1,
  B,
  C = 2
}
console.log(E5)
// window.onmousedown = function(mouseEvent) {
//   console.log(mouseEvent.button);  //<- Error
// };