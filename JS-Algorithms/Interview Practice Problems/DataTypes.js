/*
Data Types in JavaScript:
string, number, boolean, undefined, undeclared, null, object, array
- typeof operator is used to find the type of a variable
*/

// What is the output of below source code
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object

// null and undefined data types are equal in value , but different in type.
var x = [1,2,3];
console.log(Array.isArray(x)); // Array.isArray() method is used to check the given variable is array or not
