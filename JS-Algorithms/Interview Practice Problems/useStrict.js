/* 
use Strict:
1. It is the new feature in ES6.
2. 'use strict' statement defines the code should be in strict mode.
3. This can be declared beginning of the code and inside function.
4. Purpose of strict mode is : enforce stricter parsing and error handling in your code.
5. prevents the use of global variables.
6. function parameters must be unique.
7. Not able to delete the properties in object using delete operator.
*/

// Example 1
 'use strict'

 name = 'Mounika'
 console.log(name); // error

 // Example 2
 'use strict'
 function sum(a,a,b) {
     console.log(a + a + b); // error
 }
 return sum(2,5,6);

 // Example 3
 'use strict'
 delete Object.prototype; // error