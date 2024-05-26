// 8. Comparisons

// No problem in these conversions
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined >= 0)

// Strict check
// console.log("2" == 2)   // True (converts string to number then compare)
// console.log("2" === 2)  // False (First check datatype too)