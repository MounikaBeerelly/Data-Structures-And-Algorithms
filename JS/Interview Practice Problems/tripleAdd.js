/*
- Question: Create a function that returns the total of all three numbers that is invoked as followed.
- tripleAdd(10)(20)(30)
- Currying function is the technique of translating one function that takes multiple arguments into a sequence of functions that each take a single argument. 
- Currying function is exactly as triple add function.
- triple add function is a sequence of functions that each take in a single argument 
*/

function tripleAdd(num1) {
    return function(num2) {
        return function(num3){
            return num1 + num2 + num3;
        }
    }
}
console.log(tripleAdd(15)(40)(39));