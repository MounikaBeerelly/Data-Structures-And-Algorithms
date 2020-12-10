// Fibonacci Series
/* 
1. Fibonacci series is the special sequence of numbers. 
2. Fibonacci Sequence: 1, 1, 2, 3, 5, 13, 21,....
3. The first two numbers in the sequence are 1 and 1 and every number after that is the sum of the previous two numbers.
*/

function Fibonacci(num) {
    return num <= 1 ? num : Fibonacci(num-1)+Fibonacci(num-2); // recursion
}

console.log(Fibonacci(4)); // returns the position value


// Above code takes long time to run, because its always recalculating the numbers


var a=0, b=1,c;
var result = '';
for(var i = 0; i<10; i++) {
    c = a+b;
    a = b;
    b = c;
    result += a + ',';
}
console.log(result);