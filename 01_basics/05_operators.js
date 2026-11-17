// Basics Arithmetic Operators

let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000


//------------------------------------------------------------
// String Operations

let firstName = "John"
let lastName = "Doe"
console.log(firstName + " " + lastName)

let message = "Hi";
message += "Aman";
console.log(message) // "HiAman"

console.log( 1 + "2" )        // "12"
console.log( "1" + 2 )        // "12"
console.log( "1" + 2 + 2 )        // "122"
console.log( 1 + 2 + "2" )        // "32"



//------------------------------------------------------------
// Assignment Operators

let x = 5
x += 2 // equivalent to x = x + 2
console.log(x) // 7

x -= 3 // equivalent to x = x - 3
console.log(x) // 4

x *= 2 // equivalent to x = x * 2
console.log(x) // 8

x /= 4 // equivalent to x = x / 4
console.log(x) // 2

x **= 3 // equivalent to x = x ** 3
console.log(x) // 8

x %= 2 // equivalent to x = x % 2
console.log(x) // 0



//------------------------------------------------------------
// Comparison Operators

console.table([
    { Operator: "==", Meaning: "Equal value", Example: '10 == "10"', Output: true },
    { Operator: "===", Meaning: "Strict equal (check datatype)", Example: '10 === "10"', Output: false },
    { Operator: "!=", Meaning: "Not equal", Example: "10 != 5", Output: true },
    { Operator: "!==", Meaning: "Strict not equal", Example: '10 !== "10"', Output: true },
    { Operator: ">", Meaning: "Greater than", Example: "10 > 5", Output: true },
    { Operator: "<", Meaning: "Less than", Example: "10 < 5", Output: false },
    { Operator: ">=", Meaning: "Greater or equal", Example: "10 >= 10", Output: true },
    { Operator: "<=", Meaning: "Less or equal", Example: "5 <= 10", Output: true },
]);

let z = 10;
let y = "10";

console.log(z == y);  // true
console.log(z === y); // false

console.log(z > 5);   // true
console.log(z < 5);   // false

// comparision with null is tricky, so avoid it if possible. Use strict equality instead.
console.log(null == undefined);  // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true
// comparisions convert null to 0, but null is not equal to 0. So, null >= 0 is true, but null > 0 is false.


//------------------------------------------------------------
// Logical Operators

let age = 25;

console.log(age > 18 && age < 60);      // true
console.log(age < 18 || age > 60);      // false

let isLoggedIn = false;
console.log(!isLoggedIn);               // true



//------------------------------------------------------------
// Increment and Decrement Operators
let count = 5;
console.log(count++);  // 5
console.log(count);    // 6

count = 5;
console.log(++count);  // 6
console.log(count);    // 6

count = 5;
console.log(count--);  // 5
console.log(count);    // 4

count = 5;
console.log(--count);  // 4
console.log(count);    // 4

// Pre : First increases/decreases the value, then returns it.
// Post: First returns the value, then increases/decreases it.


//------------------------------------------------------------
// Ternary Operator
let age1 = 20;
let isAdult = age1 >= 18 ? true : false;
console.log(isAdult); // true


//------------------------------------------------------------
// Bitwise Operators

console.log(5 & 1);     // 1
console.log(5 | 1);     // 5
console.log(5 ^ 1);     // 4
console.log(5 << 1);    // 10
console.log(5 >> 1);    // 2
