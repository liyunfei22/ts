// 书写完整函数类型

let add: (x: number,y: number) => number = function(x: number, y:number) {
  return x+y
}
let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function() {
    let pickedCard = Math.floor(Math.random() * 52)
    let pickedSuit = Math.floor(pickedCard / 13)
    return {
      suit: this.suits[pickedSuit], card: pickedCard % 13
    }
  }
}
// 泛型
function identity<T>(arg: T):T {
  return arg
}
let myIdentity: {<T>(arg:T):T} = identity
// 泛型接口
interface Gerrn{
  <T>(arg: T):T
}
function inden<T>(arg: T): T { 
  return arg
}
let myIdenti: Gerrn = inden
