// function printLable(lableObj: {label: string}) {
//   console.log(lableObj.label)
// }
// let myObj = { size: 10, label: 'size 10' };
// printLable(myObj)
interface labelledValue {
  label: string;
}
function printLable(labelObj: labelledValue) {
  console.log(labelObj.label)
}
let myObj = { size: 10, label: 'size 10'}
printLable(myObj)
// 可选属性
interface SquareConfig {
  color: string;
  width: number;
  [propName: string]: any
}
function createSquare(config:SquareConfig): {color: string; area: number} {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare
}
// let mySquare = createSquare({
//   width: 100,
//   color: 'white',
//   size: 10
// } as SquareConfig)
let mySquare = createSquare({
  width: 100,
  color: 'white',
  size: 10
})
console.log(mySquare)
// 只读属性
interface Point {
  readonly x: number,
  readonly y: number
}
let p1: Point = {
  x: 5,
  y: 10,
}
// 
let a1: number[] = [1,2,3]
let ro: ReadonlyArray<number> = a1;
// ro[0] = 2;
a1.push(4)
console.log(a1, ro)
// 额外的属性检查
// 函数类型
interface SearchFun {
  (source: string, subString: string):boolean;
}
let mySearch: SearchFun;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1
}
// 可索引的类型
interface StringArray {
  [index: number]: string;
}
let myArr: StringArray;
myArr =  ['a', 'b']
// TODO: 类类型
// 接口继承
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLenght: number;
}
let Square = <Square>{};
Square.color = 'blue'
// 混合类型
// TODO: 接口继承类
