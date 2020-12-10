// Find the given string is palindrome or not
// A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function Palindrome(str) {

    var lowerCaseStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    var reverseStr = lowerCaseStr.split('').reverse().join('');

    if(reverseStr === lowerCaseStr) {
        console.log('Given string is a Palindrome');
    }
    else {
        console.log('Given string is not a palindrome');
    }
}
Palindrome("madam");


/* 
1. str.toLowerCase() -> convert string into lowercase, means  Madam -> madam
2. str.replace(/[W_]/g, '') -> race car = racecar
3. lowerStr.split('') -> converts string into array
4. reverse() -> reverse the splitting array elements
5. join() -> join the reverse array elements into string 
*/
/* 
Another way for implementing Palindrome program
function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
palindrome("A man, a plan, a canal. Panama");
*/