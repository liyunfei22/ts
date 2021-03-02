"use strict";
function printLable(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: 'size 10' };
printLable(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquare = createSquare({
//   width: 100,
//   color: 'white',
//   size: 10
// } as SquareConfig)
var mySquare = createSquare({
    width: 100,
    color: 'white',
    size: 10
});
console.log(mySquare);
var p1 = {
    x: 5,
    y: 10,
};
// 
var a1 = [1, 2, 3];
var ro = a1;
// ro[0] = 2;
a1.push(4);
console.log(a1, ro);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArr;
myArr = ['a', 'b'];
var Square = {};
Square.color = 'blue';
// 混合类型
// TODO: 接口继承类
