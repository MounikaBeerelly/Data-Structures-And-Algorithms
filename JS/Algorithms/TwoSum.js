// twoSum problem is --> find the pair of two integers in an array , and that sum gives the specified target value.
/* 
1. Take one function, that contains two parameters i.e, numArray and sum
2. This function returns every pair of numbers from numArray.
3. ADD every pair of numbers in result  equal to specified result sum
*/

function twoSum(numArray, sum) {
    var pairs = []; // define array for Put all the pairs
    var hashTable = []; // use a hash table and push every number that we iterate through into that hash table
    
    for(var i=0; i< numArray.length; i++) { // loop through each element in array
        var currentNum = numArray[i];
        var counterPart = sum - currentNum;
        if(hashTable.indexOf(counterPart) !== -1){
            pairs.push([currentNum, counterPart]);
        } 
        hashTable.push(currentNum);
    }
    return pairs;
}

console.log(twoSum([1,4,6,5,2,8,3], 7));

// Brute force  method
 function TwoSum(Array, target) {
     var result = [];
     for(var i=0; i<=Array.length; i++){
         for(var j = i+1; j<Array.length; j++){
             if(Array[i] + Array[j] === target) {
                 result.push([Array[i],Array[j]]);
             }
         }
     }
     return result;
 }
 console.log(TwoSum([1,4,6,5,2,8,3], 7)); // [ [ 1, 6 ], [ 4, 3 ], [ 5, 2 ] ]