/*
 Queue:
 1. define the constructor function
 2. Enqueue -> push
 3. Dequeue -> pop
*/
function Queue(capacity) {
    this.capacity = capacity || Infinity;
    this.storage = {};
    this.front = 0; // head
    this.rear = 0; // tail
    this.count = 0;
}

Queue.prototype.enqueue = function(val) {
    if(this.count < this.capacity) {
        this.storage[this.rear] = val;
        this.rear += 1;
        return this.getSize();
    }
    return 'Max capacity already reached. Remove element before adding a new one.'
}

Queue.prototype.dequeue = function() {
 var element = this.storage[this.front];
 delete this.storage[this.front];
 if(this.front < this.rear){
     this.head += 1;
 }
 return element;
}

Queue.prototype.getSize = function() {
    return this.rear;
}

Queue.prototype.peek = function() {
    return this.storage[this.head];
}

Queue.prototype.contains = function(value) {
    for(var i = this.front; i < this.rear; i++) {
        if(this.storage[i] === value) return true;
    }
    return false;
};

var queue1 = new Queue(10);
queue1.enqueue(5);
queue1.enqueue(8);
queue1.enqueue(12);
queue1.enqueue(9);
queue1.enqueue(6);
queue1.enqueue(21);
queue1.enqueue(34);

console.log(queue1);
queue1.dequeue();
console.log(queue1.peek());
console.log(queue1.contains(9));
console.log(queue1.contains(90));


