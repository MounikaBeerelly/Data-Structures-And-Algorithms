// Recursion means calling function itself
// 4! = 4 * 3 * 2 * 1 = 24

function factorial(num) {
    if(num === 1) {
         return num; // base case
    }
    else {
        return num * factorial(num - 1); // recursive case - means runs function itself
    }
  }
  console.log(factorial(7));