// reverse the words in a string

function ReverseWords(string) {

    var wordsArray = string.split(' '); // Split the string into words array
    var reverseWordsArray = []; // initialize reverseWordsArray with empty values

    wordsArray.forEach(word => { // loop the wordsArray 
        var reversedWord = '';  // initialize variable for storing reverse words
        for(var i = word.length - 1; i >= 0; i--) { // backword the for loop
            reversedWord += word[i]; // store the reverse words
        }
        reverseWordsArray.push(reversedWord); // push all the reversed words into reverseWordsArray
    });
    return reverseWordsArray.join(' '); // join the array of words into string
}

console.log(ReverseWords('Mounika Saritha Divya')); // => akinuoM ahtiraS ayviD
console.log(ReverseWords('Coding JavaScript')); // => gnidoC tpircSavaJ