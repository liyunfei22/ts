"use strict";
// 书写完整函数类型
var add = function (x, y) {
    return x + y;
};
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var pickedCard = Math.floor(Math.random() * 52);
        var pickedSuit = Math.floor(pickedCard / 13);
        return {
            suit: this.suits[pickedSuit], card: pickedCard % 13
        };
    }
};
// 泛型
function identity(arg) {
    return arg;
}
var myIdentity = identity;
function inden(arg) {
    return arg;
}
var myIdenti = inden;
