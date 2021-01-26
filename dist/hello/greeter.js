"use strict";
// function greeter (person:string) {
//   return "Hello," + person;
// }
// let user = '11';
// document.body.innerHTML = greeter(user)
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter (person: Person) {
//   return 'hello' + person.firstName + person.lastName;
// }
// let user = {
//   firstName: 'li',
//   lastName: 'yf'
// }
// document.write(greeter(user))
// class Student {
//   fullName: string;
//   constructor(public firstName: any, public lastName: any) {
//     this.fullName = firstName + lastName;
//   }
// }
// 数组
// let list: number[] = [1, 1];
// let list: Array<number> = [1, 2]
// 元组
// let x: [string, number];
// x = ['hello', 1]
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color[2];
console.log(c);
