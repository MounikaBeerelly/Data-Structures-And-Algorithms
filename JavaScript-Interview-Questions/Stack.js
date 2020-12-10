/* 
Stack Implementation:
1. cretae stack function

*/

// Method-1
function Stack() {
   // initialize items and top 
    var items = [];
    var top = 0;

    // Push method
    this.push = function(element) {
        return items.push(element);
    }
   //Pop method
   this.pop = function() {
       return items.pop();
   }
   // Peek top item from the stack
   this.peek = function(){
       return items[items.length - 1];
   }
   //Is stack empty
   this.isEmpty = function() {
       return items.length === 0;
   }
   // clear the stack
   this.clear = function() {
       items.length = 0;
   }
   //Size of the stack 
   this.size = function() {
       return items.length;
   }
}

var stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.peek());
console.log(stack1.isEmpty());
stack1.pop();
stack1.clear();
console.log(stack1.isEmpty());
console.log(stack1.size());