/*
IIFE : Immediately Invoked Function Expression
- This means the function is executed, right after when it is created.
- Wrapping with paranthesis around the function and append paranthesis to execute the function.
-IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations.
*/

console.log((function IIFE(num) {
    return num * 2;
})(40));


console.log((function() {
  
    function getTotal(a, b) {
      return a + b;
    }
    
    var $ = 'currency';
    
    if (true) console.log('hello world');
    
  })());
  