 function Stack(capacity) {
    // Maximum capacity of items that the stack can hold
    this.capacity = capacity || Infinity;
    this.storage = {};

    // Count variable to keep track of the size of the stack
    this.count = 0;
}

// O (1)
// The implementaron of this method is pretty straightforward,
// we just check if the actual count is less that the capacity 
// then it is safe to add the element, otherwise we return an error message. 
// We then add the ítem, increment the count and return the count.
Stack.prototype.push = function(val) {
    if (this.count < this.capacity) {
        this.storage[this.count + 1] = val;
        this.count += 1;
        return this.count;
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
};

// O (1)
// we first get a reference to the element we are going to remove.
// We then proceed to remove that element, decrement de count and if
// the count is less than 0 we set it back to 0, and finally we return the value. 
Stack.prototype.pop = function() {
    var value = this.storage[this.count - 1];
    this.count -= 1;
    delete this._storage[this.count];
    if (this.count < 0) {
        this.count = 0;
    }
    return value;
};

// O (1)
Stack.prototype.peek = function() {
    return this.storaget[this.count - 1];
}

// O (1)
Stack.prototype.size = function(val) {
    return this.count;
};

var stack1 = new Stack(5);
stack1.push(2);
stack1.push(21);
stack1.push(32);
stack1.push(6);
stack1.push(7);
stack1.push(83);
stack1.push(20);
console.log(stack1.push(8));
