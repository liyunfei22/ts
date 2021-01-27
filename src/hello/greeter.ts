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
let notSure:any = 4;
// notSure.inItExists();
let list:any[] = [1, true, 'false']
// Void 没有任何类型 声明一个void类型的变量没有什么大用，因为你只能为他赋值undefined和null
let unusable:void = undefined;
// null和undefined
// 默认情况下null和undefined是所以类型的子类，就是说可以把null和undefined赋值给number类型的变量；
// 当你指定了--strictNullChecks，null和undefined只能赋值给他们各自和void, 可以使用联合类型：string|null|undefined
let n:null = null;
let u:undefined = undefined;
// Never
/*
never 类型 表示哪些永不存在的值得类型
never 是那些总是会抛出异常，或根本不会有返回值得函数表达式或箭头函数
never类型是任何类型的子类型，也可以赋值给任何类型 
any 不可以赋值给never
*/

function error(message:string):never {
  throw new Error(message);
}
// error('ssss')
/*
  Object 表示非原始类型，也就是除 number,string,boolean,null,undefined,symnol
*/
let obj:object = {
  a: 1
};
console.log(obj)
/*
  类型断言

*/
let someValue:any = 'this is a string';
let strLen:number = (<string>someValue).length;
let strLen2:number = (someValue as string).length;




// 变量声明
// let const
// 解构
// 解构数组
let input: [number, number] = [1, 2]
// let [first, second] = input;
function f([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
}
f(input);
// 解构对象
let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}
// let { a, ...passtrough } = o;
// console.log(passtrough);
let { a: number1, b:number2 } = o;
let { a, b }: { a: string, b: number } = o;
// 默认值
function keepWholeObject(wholeObject: {a: string, b?: number}) {
  let {a, b = 101} = wholeObject;
}
keepWholeObject(o)