// Example -1

// Check weather the two objects are same or not
const user1 = {
    name: 'Jordan',
    age: 28,
  };
   
  const user2 = {
    name: 'Jordan',
    age: 28,
  };
  
   // These two different objects are not equal,. Beacause two objects are individual objects
  console.log(user1 == user2);// false
  console.log(user1 === user2);// false

 
  // Use  "stringify()" method to compare two objects in javascript.
  console.log(user1 == user2);// false
  console.log(JSON.stringify(user1) === JSON.stringify(user2)); // true

  // ************** reference by value ****************
  const user3 = {
    name: 'Jordan',
    age: 28,
  };
   
  const user4 = user3;
// use3&4 objects are equal, because user4 is reference to the user3 object.
  console.log(user3 == user4);// true
  console.log(user4 === user3);// true

// Example -2
var arr1 = []; // empty arry
var arr2 = new Array(50); // returns array length
var arr3 = new Array(1, 2, "three", 4, "five"); // returns array with elements
var arr4 = new Array([1, 2, 3, 4, 5]); // returns nested array with elements
 
console.log('arr1: ', arr1); // []
console.log('arr2: ', arr2); //  [ <50 empty items> ]
console.log('arr3: ', arr3); // [ 1, 2, 'three', 4, 'five' ]
console.log('arr4: ', arr4); // [ [ 1, 2, 3, 4, 5 ] ]



// Example -3 Array IndexOf method
console.log([10, 20, 30, 40, 50].indexOf(30)); // 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1
/* 
- In JS two objects are not equal, it looks same but different objects
- this object looks identical to this object because they both have the same properties and key values . but they are still totally separate objects.
- They are both defined independently and they have no connection between each other. therefore this index of method returns negative 1 on the next line.
*/ 
console.log('hello world'.indexOf('o')); // 4
console.log([[1], [2], [3], [4]].indexOf([2])); // -1 
// same as objects in Js, two arrays are never equal

//in general two different objects will never be equal but if two different variables both reference the same underlying object then they are equal.


 // Example - 3
 const myArray = [5];
const anotherArray = myArray;
 
console.log([10, 20, 30, 40, 50].indexOf(30));
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' }));
console.log('hello world'.indexOf('o'));
console.log([[1], [2], [3], [4], myArray].indexOf(anotherArray)); // 4


// Example -4  (Equivalent numbers)
console.log(900.9 === 300.3 * 3);  // false
console.log(300.3 * 3); //900.9000000000001
// toFixed and toPrecision methods solve the issue
console.log(Number((300.3 * 3).toFixed(2)));
console.log(Number((300.3 * 3).toPrecision(12)));
console.log(((300.3 * 10) * 3) / 10);


// Example -5 Objects and strings
var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';
 
console.log(string2); // Tampa
 // strings are pass by value in JS, so we cannot change the string1 value
 
////////////////////////////////
 
 
var person1 = {
  name: 'Alex',
  age: 30
};
 
var person2 = person1;
 
person2.name = 'Kyle';

console.log(person1); // { name: 'Kyle', age: 30 }
// person2 object is created with refernce of person1. By pass by reference, we can change the properties in objects


/* Example -6 Strings and Arrays
   Use array methods in strings
   only use 'read-only' methods: filter, forEach, map, some, every, etc.
   cannot use: push, pop, splice, shift, reverse, etc.
*/
const data1 = 'Jordan Smith';
 
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});
 
console.log(data2); //[ 'S', 'm', 'i', 't', 'h' ]


// Example -7 Object Properties

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
 
a[b] = 200;
// a['[object Object]'] = 200
 
a[c] = 400;
// a['[object Object]'] = 400
 
console.log(a[b]); // 400
// console.log(a['[object Object]']);



// Example -8 Functions X and Y

var x = 10;
 
function y() {
    x = 100;
    return;
    function x() {}
}
 
y();
 
console.log(x);// 10 'Because of hoisting'


//Example -9 Withdraw from account

const account1 = {
    name: 'Jen',
    totalAmount: 5000,
    deductAmount: function(amount) {
      this.totalAmount -= amount;
      return 'Amount in account: ' + this.totalAmount;
    },
  };
   
  const account2 = {
    name: 'James',
    totalAmount: 8000,
  };
   
  const withdrawFromAccount = function(amount) {
    return account1.deductAmount.bind(account2, amount);
  };
   
  console.log(withdrawFromAccount(500)());
  console.log(withdrawFromAccount(200)());