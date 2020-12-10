/*
Hoisting: Variables and functions are hoisted to the top of the scope that they are declared in.
1. In javascript variables and functions are hoisted.
2. Hoisting means use the variables before the declaration (or) declare the variables fter using.
3. Javascript only hoist the declaration not initialization.
=> Using function declarations instead of function expressions can be very useful in your coding because
   where they function declaration the whole function is hoisted to the top of the file or to the top of
   the scope.
4. block scope variables(let,const) only hoisted top of the loop/block, not the top of the entire function.

*/

x = 4;
console.log(x);
var x;

// tab 1
 
console.log(color);
 
var color = "blue";
 
console.log(color);
 

var i;
for(i=0;i<5;i++){
  setTimeout(()=> {
    console.log(i)
  },1000);
}
 
 
//tab 2
 
var color;
 
console.log(color);
 
color = "blue";
 
console.log(color);
 
 
 
// tab 3
 
console.log(getProduct(2, 3));
 
var getProduct = function(num1, num2) {
  return num1 * num2;
};
 
console.log(getProduct(2, 3));
 
 
 
// tab 4
 
console.log(getProduct(2, 3));
 
function getProduct(num1, num2) {
  return num1 * num2;
}
 
 
 
// tab 5
 
var globalVar = 'global';
 
console.log((function() {
  
  var name = 'Jen';
  
  var getAge = function() {
    return '30';
  };
  
  function getState() {
    return 'Delaware'; 
  }
  
})());

// tab 1
 
function getTotal() {
    console.log(multiplier);
    console.log(total);
    
    let total = 0;
    
    for(var i = 0; i < 10; i++) {
      
      let valueToAdd = i;
      var multiplier = 2;
      total += valueToAdd * multiplier;
    }
    
    return total;
  }
   
  console.log(getTotal());
   
   
   
  // tab 2
   
  function getTotal() {
    let total;
    var multiplier;
    
    total = 0;
    
    for(var i = 0; i < 10; i++) {
      let valueToAdd;
      
      valueToAdd = i;
      multiplier = 2;
      total += valueToAdd * multiplier;
    }
    
    return total;
  }
   
  console.log(getTotal());