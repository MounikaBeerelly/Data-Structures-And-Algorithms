/* FizzBuzz: Given an integer number n, 
   for multiples of 3 print “Fizz” for the multiples of 5 print “Buzz”. 
   For numbers which are multiples of both 3 and 5 print “FizzBuzz”.
*/
function FizzBuzz(num) {
    for(var i=1; i <= num; i++) {
      if(i %15 === 0) { 
       console.log('FizzBuzz'); }
     else if(i % 3 === 0){ 
       console.log('Fizz');
      }  
     else if(i % 5 === 0) {        
        console.log( 'Buzz');
       } 
       else {
         console.log(i)
       }  
      }
    }
    console.log(FizzBuzz(30));