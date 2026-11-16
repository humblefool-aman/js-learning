// Variables
// A variable is a named container used to store a value.

/*
3 ways to declare a variable in JavaScript:
    1. const - used to declare a variable that cannot be reassigned
    2. let - used to declare a variable that can be reassigned
    3. var - used to declare a variable that can be reassigned (not recommended -- issue in block scope & functional use)
*/

/*
| Feature                         | var | let | const |
|---------------------------------|-----|-----|-------|
| Reassignment                    | Yes | Yes | No    |
| Redeclaration in same scope     | Yes | No  | No    |
| Block scoped                    | No  | Yes | Yes   |
| Function scoped                 | Yes | Yes | Yes   |
| Must initialize immediately     | No  | No  | Yes   |
*/

const accountId = 123456789;
let accountName = "John Doe";
var accountBalance = 1000.50;
accountCity = "New York";
let accountCountry; // undefined

console.table({accountId, accountName, accountBalance, accountCity, accountCountry});

// accontId = 987654321;            -- not allowed
accountName = "Jane Smith";        // allowed
accountBalance = 2000.75;          // allowed
accountCity = "Los Angeles";         // allowed
accountCountry = "USA";             // allowed
console.table([accountId, accountName, accountBalance, accountCity, accountCountry]);


/*  Best practice: 
    - Use const by default 
    - let when reassignment is necessary. 
    - Avoid var in modern JavaScript.
*/