/*
Merge sort is one of the most popular sorting algorithm. 
It uses the concept of divide and conquer to sort a list of elements.
Meaning, it will divide the bigger problem into smaller problems and then solve each of the small problems 
in order to solve the bigger problem.
The input for merge sort is an array of integers of length n, which needs to be sorted, typically from least to greatest. 
Merge sort, splits the unsorted array into two parts and then recursively apply merge sort to these sub-arrays 
*/

function mergeSort (arr) {    
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);
    
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
 
function merge (array1, array2) { 
    var result = [];
    while (array1.length && array2.length) {
      var minElem;
      if (array1[0] < array2[0]) minElem = array1.shift();
      else minElem = array2.shift();
      result.push(minElem);
    }
    
    if (array1.length) result = result.concat(array1);
    else result =result.concat(array2);
    return result;
}
 
console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));