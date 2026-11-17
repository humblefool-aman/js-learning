"use strict";   // treat all JS code as newer version


// Data Types
// A data type is an attribute of data that tells the interpreter or compiler how the programmer intends to use the data.

// A JavaScript variable can hold many data types: 

/*
JavaScript Data Types
|-- Primitive types (7)
|   |-- Number      - numeric values, including integers and decimals
|   |-- BigInt      - integers larger than Number can safely represent
|   |-- String      - text
|   |-- Boolean     - true or false
|   |-- Undefined   - a value has not been assigned
|   |-- Null        - an intentional absence of a value
|   `-- Symbol      - a unique identifier
`-- Object (non-primitive)
    |-- Object
    |-- Array
    |-- Function
    |-- Date
    |-- RegExp
    |-- Set
    `-- Map

Arrays, functions, dates, and the other entries above are specialized objects.
Note: typeof null returns "object" for historical reasons, but null is primitive.
*/


// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt("1234567890123456789012345");

// Strings
let color = "Yellow";
let lastName = "Johnson";

// Boolean
let isOpen = true;
let isEmpty = false;

// Undefined
let car;
let house;

// Null
let user = null;
let order = null;

// Symbol
const id1 = Symbol();
const id2 = Symbol();


// typeof - returns a string indicating the type of the unevaluated operand.

console.log( typeof length );        // number
console.log( typeof isOpen );        // boolean
console.log( typeof car );        // undefined is treated as undefined
console.log( typeof user );        // null is treated as object
console.log( typeof id1 );        // symbol

console.log( typeof "aman" );        // string


// Special Cases
console.log(typeof null);      // object
console.log(typeof undefined); // undefined
console.log(typeof NaN);       // number



//-------------------------------------------------------------------------------------

// Objects - stores data in key-value pairs.
//  A key (also called a property) is always a string, and the value can be any data type, including another object.

// Object
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.isStudent); // false

// Array
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange

// Function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Hello, Alice!

// Date
let currentDate = new Date();
console.log(currentDate); // current date and time


console.log(typeof person); // object
console.log(typeof fruits); // object
console.log(typeof greet);  // function 
console.log(typeof currentDate); // object
