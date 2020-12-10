/* The harmless ransom note-basically you are given two strings. 
You have to find whether you can make up the first string with words 
present in the second string.
*/

// First create a function, that takes two arguments
function harmlessRansomNote(noteText, magazineText) {
// access every word in a string, we use array. So convert strings into array using split method
const notesArray = noteText.split(' ');
const magazineArray = magazineText.split(' ');
// we can now iterate each word in the array. before that intialize one address object
const magazineObj = {};

 // present every word like this {this:1}.
 magazineArray.forEach(word => {
     if(!magazineObj[word]) { // if the word isn't present, then set magazineObj equal to zero
        magazineObj[word] = 0;
     }
     magazineObj[word] ++; // then add the word to hash table
 });
 
 let noteIsPossible = true;
 notesArray.forEach(word => {
     if(magazineObj[word]) {
         magazineObj[word]-- ; // if the word is present in the object, we are going to remove that word to avoid duplicates
     }
    else if(magazineObj[word] < 0) {
         noteIsPossible = false; // less than zero, then set noteIsPossible to false because it doesn't exist.
     }
     else {
         noteIsPossible = false; //if we don't have all the necessary words possbile. We will mark it false.
     }
 });
 return noteIsPossible;
}
console.log(harmlessRansomNote('hello world application', 
                   'This is a application , name as hello world'));