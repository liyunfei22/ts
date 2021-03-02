"use strict";
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message
//   }
//   greet() {
//     return "Hello," + this.greeting
//   }
// }
// let greeter = new Greeter('word')
// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`animal moved ${distanceInMeters}`)
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log('woof! woof!')
//   }
// }
// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName
//   }
//   move(distanceInMeters:number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}`)
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 5) {
//     console.log('sltering...')
//     super.move(distanceInMeters)
//   }
// }
// class Horse extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   move(distanceInMeters = 45) {
//     console.log('galloping...')
//     super.move(distanceInMeters);
//   }
// }
// let sam = new Snake('sammy the python')
// let tom: Animal = new Horse('tommy the Palomino')
// sam.move();
// tom.move(34)
// class Person {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Employee extends Person {
//   private department: string;
//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department
//   }
//   public getElevatorPich() {
//     return  `hello, ${this.name} and i work in ${this.department}`
//   }
// }
// 参数属性
// class Octopus {
//   readonly name: string;
//   readonly mumberofLen: number = 8;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }
// class Octopus {
//   constructor(readonly name: string) {
//     this.name = name;
//   }
// }
// 存取器函数
// class Emploee {
//   fullName: string;
// }
// let employee = new Emploee()
// employee.fullName = 'li david'
// var passcode = 'secret passcode';
// var Employee = /** @class */ (function () {
//     function Employee() {
//     }
//     Object.defineProperty(Employee.prototype, "fullName", {
//         get: function () {
//             return this._fullName;
//         },
//         set: function (newName) {
//             if (passcode && passcode === 'secret passcode') {
//                 this._fullName = newName;
//             }
//             else {
//                 console.log('Error: ssss');
//             }
//         },
//         enumerable: false,
//         configurable: true
//     });
//     return Employee;
// }());
// var employee = new Employee();
// employee.fullName = 'Bob Smith';
// console.log(employee)
// console.log(Employee.prototype.fullName)
// 静态属性
// class Grid {
//     static origin = {
//         x: 0,
//         y: 0
//     }
//     calculateDistanceFormOrigin(point: {x:Number;y:Number}) {

//     }
// }
class Greeter {
    static standerGreeting = 'hello';
    greeting: String;
    
}
