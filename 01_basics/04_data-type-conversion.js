/* 
2 ways of data type conversion in JavaScript
    1. Explicit conversion (using constructor functions)
    2. Implicit conversion (automatic conversion)
*/

// Implicit conversion

let a = 10;        // number
let b = "20";      // string

// string + number = string
let res1 = a + b;        
console.log( res1 );

// string - number = number
let res2 = b - a;
console.log( res2 );

// string * number = number
let res3 = a * b;
console.log( res3 );

// string / number = number
let res4 = b / a;
console.log( res4 );

// Boolean Conversion
console.log( true + 1 );        // 2
console.log( false + 1 );        // 1

// ------------------------------------------------------------------
// Explicit conversion

/* String Conversion 
        - String() constructor function
        - toString() method - can only be used on numbers and booleans
*/
let x = true;
let y = 10;
let z = null;

console.log( String(x) );        // "true"
console.log( String(y) );        // "10"
console.log( y.toString() );     // "10"
console.log( String(z) );        // "null"


// Number Conversion - Number() constructor function
console.log( Number("10") );        // 10
console.log( Number("10.5") );      // 10.5
console.log( Number("abc") );     // NaN
console.log( Number("10abc") );        // NaN
console.log( Number(undefined) );  // NaN
console.log( Number(true) );        // 1
console.log( Number(false) );        // 0
console.log( Number(null) );        // 0


// Boolean Conversion - Boolean() constructor function
console.log(Boolean(1));       // true
console.log(Boolean("hello")); // true
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined));// false


// parseInt() - Converts a string into an integer.
// parseFloat() - Converts a string into a floating-point number.
console.log( parseInt("10") );           // 10
console.log( parseInt("10.5") );       // 10
console.log( parseInt("10abc") );        // 10

console.log( parseFloat("10.5") );       // 10.5
console.log( parseFloat("10.5abc") );    // 10.5
