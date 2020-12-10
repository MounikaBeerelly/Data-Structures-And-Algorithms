/* 
Equals Vs Strict-Equals( == vs ===) :

1. Equals(==) operator compares only value. It doesn't check the data type. 
   If compare two variables, the two variables have same value , it return true.
2. Strict equality(===) operator compares value and data type.
   If compares two variables, the two variables have same value and same data type, then only it returns true otherwise false.
*/

console.log(10 == '10'); // true
console.log(10 === '10'); // false

//----------------
var x=100;
function test() {
    if(false){
        var x = 199;
    }
    console.log(x); // undefined
}
test();


//--------------
var num = 50;
 // use let instead of var, it throws reference error
function logNumber() {
    console.log(num); // undefined
    var num = 100;
}
 
logNumber();