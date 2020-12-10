// Singly or Doubly invoked function
/* 
  function getTotal() {
    // build out code...
    }
    
    getTotal(10, 20);
    getTotal(10)(20);
 
    Both return the sum of two numbers
*/

// method -1
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(10,20));

function getProduct(num1) {
    return function(num2) {
        return num1 * num2;
    }
}
console.log(getProduct(12)(15));

// method -2
function getTotal() {
    var args = Array.prototype.slice.call(arguments);
    // console.log(arguments);
    if(args.length === 2) {
        return args[0] + args[1];
    }
    else if(args.length === 1) {
        return function(num2){
            return args[0] + num2;
        };
    }
}
console.log(getTotal(24,53));
console.log(getTotal(23)(54));