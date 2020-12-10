// Adding and Removing Head and Tail pointers

function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}
// Adding head pointer to the LinkedList
LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};
// Adding tails pointer to the linkedList
LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if(this.tail) this.tail.prev = newNode;
    else this.head = newNode;
    this.tail = newNode;
};

var myLL = new LinkedList();
myLL.addToTail(14);
myLL.addToTail(34);
myLL.addToTail(56);
myLL.addToHead(100);

console.log(myLL);

// Remove head pointer from the linked list
LinkedList.prototype.removeHead = function() {
    if(!this.head) return null; // if the list is empty, return null
   // if the list is not empty
    var val = this.head.value; // first store one value to the head pointer
    this.head = this.head.next;// change the linked list
    if(this.head) this.head.prev = null; // after removing head pointer, the prev head value to be null
    else this.tail = null; // if the list in empty, the tail pointer becomes null
    return val; // finally return val
}

LinkedList.prototype.removeTail = function() {
    if(!this.tail) return null; 
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null;
    else this.head = null;
    return val;
}

var ll = new LinkedList();
ll.addToHead('one');
ll.addToHead('two');
ll.addToHead('three');

ll.removeHead(); // returns one

// Searching value in the linked list
LinkedList.prototype.search = function(searchValue) {
    var currentNode = this.head; // start searching from head node
    while(currentNode) {
        if(currentNode.value === searchValue) // find search value in the list
         return currentNode.value;
        currentNode = currentNode.next; // iterate over the each node in a list 
    }
    return null; // loop false return null
};

var LL = new LinkedList();

LL.addToHead(120);
LL.addToHead(45);
LL.addToHead(8);
LL.addToTail('hello');
LL.addToTail('32');
LL.addToTail(6);

console.log(LL.search(8)); 