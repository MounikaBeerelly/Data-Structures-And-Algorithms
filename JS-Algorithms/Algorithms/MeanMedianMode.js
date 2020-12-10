// Find the mean and median and mode of an array
/*
Mean: finding averege of array values => sum of the numbers of an array divisible by length of the array
Median: Middle value of the array => 
1. If the length of the arry is odd, simply write the middle value of the array is median
2. If the length is even, write the average of the two middle values -- (mid1+mid2)/2
3.
*/

function MeanMedianMode(arr) {
    return {
        mean : getMean(arr),
        median : getMedian(arr),
        mode : getMode(arr)
    };
}

function getMean(arr) {
  var sum = 0; 

  arr.forEach(num => { // iterate each num in array
      sum += num; 
  });
   var mean = sum / arr.length;
   return mean;
}

function getMedian(arr) {
    arr.sort(function(a,b) { return a - b }); // sort numbers in ascending order
    var median;

    if(arr.length % 2 !== 0) { // if the array has odd number of elements
        median = arr[Math.floor(arr.length / 2)];
    }
    else { // array contains even number of elements
        var mid1 = arr[(arr.length / 2) - 1];
        var mid2 = arr[arr.length / 2];
        median = (mid1 + mid2) / 2;
    }
    return median;
}

function getMode(arr) {
    var modeObj = {};

    // create modeObj
    arr.forEach(num => {
        if(!modeObj[num]) modeObj[num] = 0;
        modeObj[num] ++;
    });

    // create array of mode/s
    var maxFrequency = 0;
    var modes = [];
    for(var num in modeObj) {
        if(modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        }
        else if(modeObj[num] === maxFrequency) modes.push(num);
    }

    /// if every value appers same amount of times
    if(modes.length === Object.keys(modeObj).length) modes = [];
    return modes;
}

console.log(MeanMedianMode([10,20,30,40,50,30,20,60,50,70,80,90,100]));
console.log(MeanMedianMode([1,2,3,2,3,1]));