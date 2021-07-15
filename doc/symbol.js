const s = Symbol('foo')
console.log(s)
console.log(s.toString())
console.log(typeof s)
// Symbol()
// Symbol()
// symbol
const s1 = Symbol.for('foo')
const s2 = Symbol.keyFor(s1)
// console.log(s2)
// const arr = [1, 2]
// arr[Symbol.isConcatSpreadable] = false
// console.log()
// const arr2 = arr.concat([4, [5, 6]], 2, 3)
// console.log(arr2)
// let arr1 = ['c', 'd'];
// ['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
// arr1[Symbol.isConcatSpreadable] // undefined

// let arr2 = ['c', 'd'];
// arr2[Symbol.isConcatSpreadable] = false;
// console.log(['a', 'b'].concat(arr2, 'e')) // ['a', 'b', ['c','d'], 'e']
// 'sss'.split()
// String.prototype.match(regexp)
// 等同于
// regexp[Symbol.match](this)

class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}
const mo = new MyMatcher()

'e'.match(mo) // 1