1. In javascript, use 'this' keyword inside the nested functions, then this keyword lose the reference of the object.
 >
            var myCar = {
            color: "Blue",
            logColor: function() {
                var self = this;
                console.log("In logColor - this.color: " + this.color);
                console.log("In logColor - self.color: " + self.color);
                (function() {
                    console.log("In IIFE - this.color: " + this.color);
                    console.log("In IIFE - self.color: " + self.color);
                })();
              }
            };
            
            myCar.logColor();
  >
     Output: 
        Blue
        Blue
        undefined
        Blue
-> If we define this.color = red; outside a function, then it returns red insted of undefined. Because , here this refers to the global object.

2. Call & Apply methods
-> any function defined in javascript, will be able to use the call method. It passes arguments as comma seperated.

### Pass by Value:
- In Pass by Value, Function is called by directly passing the value of the variable as the argument. Changing the argument inside the function doesn’t affect the variable passed from outside the function.
- Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).
- However, when a variable refers to an object which includes array, the value is the reference to the object.
### Pass by Reference: 
- In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affect the variable passed from outside the function. In Javascript objects and arrays follows pass by reference.
- so if we are passing object or array as an argument to the method, then there is a possibility that value of the object can change.