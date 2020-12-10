// JSON Format: JavaScript Object Notation
// Light-weight format for tranferring data
// Any data types are allowed to json object
// It is easy for humans to understand & easy for computers to parse and generate data.
// Undefined  data type is not allowed to json object
// Strings with single quotes are not allowed
// Property names are strings. wrap the property names with double quotes.


const myJsonObj = {
    "myString" : "Hello World",
    "myNumber" : 2344.56,
    "myNull" : null,
    "myBoolean" : true,
    "myArray" : [12,43, "apple"],
    "muObject" : {
        "name" : "Jhon",
        "age" : 25
    }
};

console.log(myJsonObj);



// What order are the numbers (1,2,3,4) logged out in ?
function logNumbers() {
    console.log(1); // no delay
    setTimeout(function(){console.log(2)}, 1000); // 1000 ms delay
    setTimeout(function(){console.log(3)}, 0); // 0ms delay
    console.log(4); // no delay
  }
   
  logNumbers(); // 1 4 3 2