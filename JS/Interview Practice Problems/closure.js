/*
Closure : A closure is an inner function that has access to the scope of an enclosing function.
- A closure has access to variables in 3 seperate scopes.
  1. variables has its own scope.
  2. variables in the scope of the outer function.
  3. variables in the global scope.

- It also access to :
  1. its own parameters.
  2. parameters of outer function
*/

const x = 'X is a global variable'
function outerFunc(param1) {
   const y = 'Y is a outer function variable';
   function innerFunc(param2) {
       const z = 'Z is a inner function variable';
       
       console.log('x: ', x );
       console.log('y: ', y);
       console.log('z: ', z);
       console.log('param1: ', param1);
       console.log('param2: ', param2);
   }
   return innerFunc('param2 is a inner function parameter');
}
return outerFunc('param1 is a outer function parameter');