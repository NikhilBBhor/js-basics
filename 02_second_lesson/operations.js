console.log("1" + "2" + "3");  // => 123
console.log(1 + "2" + "3");  // => 123
console.log("1" + "2" + 3);  // => 123
console.log("1" + 2 + 3);  // => 123
console.log(1 + "2" + 3);  // => 123
console.log(1 + 2 + "3");  // => 33
console.log(1 + 2 + 3);  // => 6


console.log(+true);  // => 1
// console.log(true+);  // => not allowed
console.log(+"");  // 0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // => all = 4

let counter = 100
console.log(++counter);  // => 101 -- prefix operator
console.log(counter++);  // => 101 -- postfix operator

// lets understand difference between them
// prefix
let x = 4
const y = ++x  // it first increments value of x and then assigns it to y
console.log("prefix", x, y);

// postfix
let a = 7
const b = a++  // it first assigns the value of a to b and then increments value of a
console.log("postfix", a, b);


// comparison operations
console.log(null > 0);  // => false
console.log(null = 0);  // => false
console.log(null >= 0);  // => true
// here in >= null gets converted into 0
