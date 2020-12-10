// Binary Search algorithm , search for a given value inside of a list or not.
// Binary search algorithm, first sorting the number Array from Ascending to DEscending order


function BinarySearch(numArray, key) {

    var middleIndex = Math.floor(numArray.length / 2) ; // find the middle element index
    var middleElement = numArray[middleIndex];

    if(middleElement === key)  return true;

    else if(middleElement < key && numArray.length > 1) {
        return BinarySearch(numArray.splice(middleIndex, numArray.length), key);
    }

    else if(middleElement > key && numArray.length > 1) {
        return BinarySearch(numArray.splice(0, middleIndex), key);
    }

    else return false;
}

console.log(BinarySearch([20,50,48,12,76,34,], 76));

function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    
    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}
 
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));