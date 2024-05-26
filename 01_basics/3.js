// 6. Datatype conversion confusion

let v1 = "33abc"

// console.log(typeof v1)      // 2 ways to check type
// console.log(typeof(v1))

let c1 = Number(v1)
// console.log(typeof c1)   // This is wrong in js, should not have converted it but JS has some problems
// console.log(c1)          // NaN - Not a number

let v2 = null
let c2 = Number(v2)
// console.log(typeof c2)
// console.log(c2)

let v3 = undefined
let c3 = Number(v3)
// console.log(typeof c3)
// console.log(c3)         // Nan

// Conversions to Number
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
// null => 0

let v4 = "abc"
let c4 = Boolean(v4)
// console.log(c4)

// Conversions to boolean from string and boolean from number
// 0 => false, 1 => true
// "" => false, "anything" => true


// 7. ****** Operations ********
let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2 * 2)
// console.log(2 ** 3) // Power
// console.log(2 / 3)
// console.log(2 % 3)

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
// console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(3 + 4 * 5 % 3) // 4*5 = 20 => 20 % 3 => 2 + 3 => 5