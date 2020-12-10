//closures

/*
function Counter() {
    var count = 0;
    return function innerFunc() {
        count ++;
        return count;
    }
    return innerFunc;
};
*/


// example
(function() {
    var x = y = 200; // y= 200; var x =y;
  })();
   
  console.log('y: ', y); // 200 , y is a global variable
  console.log('x: ', x); // error, x cannot defined

  
  // Pass by value:

  