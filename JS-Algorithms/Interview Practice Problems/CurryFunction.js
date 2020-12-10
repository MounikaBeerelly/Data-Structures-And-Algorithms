/*
Currying Function:
- Currying function is the technique of translating one function that takes multiple arguments into a sequence of functions that each take a single argument. 
*/

function getSum(a,b) {
    return a + b;
}
console.log(getSum(2,7));


// currying function
function getProduct(a) {
    return function(b) {
        return a * b;
    }
}
console.log(getProduct(1)(8));


// Ex-2
 
// function getTravelTime(distance, speed) {
//   return distance / speed;
// }
 
function getTravelTime(distance) {
    return function(speed) {
      return distance / speed;
    };
  }
   
  const travelTimeBosNyc = getTravelTime(400);
  const travelTimeMiamiAtlanta = getTravelTime(600);
  console.log(travelTimeBosNyc(100));