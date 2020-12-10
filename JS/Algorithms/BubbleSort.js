/* Bubble Sort Algorithm:
------------------------------ 
- Bubble sort algorith will taken one parameter an array of numbers and 
  it will return array of numbers from least to greatest.
- In Bubble sort every pair of adjacent values is compared, and then the two values swap positions if the first value is greater than the second. 
  This way during each pass through the array, the largest value “bubbles up” to the top, 
  and after each pass the elements furthest to the right are in the correct order.
*/

function BubbleSort(array) {
    for( var i = 0; i < array.length; i++){
        for(j = i+1; j < array.length; j++) {
        if(array[i] > array[j]) {
            [ array[i], array[j] ] = [ array[j], array[i] ];      
        }
    }
}
    return array;
}

console.log(BubbleSort([2,5,8,3,6]));

// Another way

function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    
    return array;
}
 
console.log(bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]));
