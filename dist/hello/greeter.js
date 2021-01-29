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
// enum Color {Red, Green, Blue};
// let c = Color[1];
// console.log(c)
// Any
var notSure = 4;
// notSure.inItExists();
var list = [1, true, 'false'];
// Void 没有任何类型 声明一个void类型的变量没有什么大用，因为你只能为他赋值undefined和null
var unusable = undefined;
// null和undefined
// 默认情况下null和undefined是所以类型的子类，就是说可以把null和undefined赋值给number类型的变量；
// 当你指定了--strictNullChecks，null和undefined只能赋值给他们各自和void, 可以使用联合类型：string|null|undefined
var n = null;
var u = undefined;
// Never
/*
never 类型 表示哪些永不存在的值得类型
never 是那些总是会抛出异常，或根本不会有返回值得函数表达式或箭头函数
never类型是任何类型的子类型，也可以赋值给任何类型
any 不可以赋值给never
*/
function error(message) {
    throw new Error(message);
}
// error('ssss')
/*
  Object 表示非原始类型，也就是除 number,string,boolean,null,undefined,symnol
*/
var obj = {
    a: 1
};
console.log(obj);
/*
  类型断言

*/
var someValue = 'this is a string';
var strLen = someValue.length;
var strLen2 = someValue.length;
// 变量声明
// let const
// 解构
// 解构数组
var input = [1, 2];
// let [first, second] = input;
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f(input);
// 解构对象
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
// let { a, ...passtrough } = o;
// console.log(passtrough);
var number1 = o.a, number2 = o.b;
var a = o.a, b = o.b;
// 默认值
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 101 : _a;
}
keepWholeObject(o);
