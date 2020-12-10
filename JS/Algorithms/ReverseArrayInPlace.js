// Reverse Array in place => arr[0] - arr[n] & arr[1] - arr[n-1] & so on...

function ReverseArrayInPlace(arr) {

    for(var i = 0; i <= arr.length /2; i++) { // iterate each element in an array
        var tempVar = arr[i]; // define temp variable
        arr[i] = arr[arr.length - 1 - i]; // first value in array is replaced by last value
        arr[arr.length - 1 - i] = tempVar; // last value in array replaced by first
    }
    return arr; // return array
}
 console.log(ReverseArrayInPlace([1,2,3,4,5,6,7,8,9]));
 console.log(ReverseArrayInPlace(['Apple', 'Orange', 'Banana', 'Grapes', 'Guava']));