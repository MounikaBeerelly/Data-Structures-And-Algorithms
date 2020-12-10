// Find the index of the value in LinkedList

LinkedList.prototype.indexOf = function(value) {
    var indexes = [];
    var currentIndex = 0; // initialiize currentIndex value to be zero
    var currentNode = this.head;
    while(currentNode) {
        if(currentNode.value === value) {
            indexes.push(currentIndex);
        }
        currentNode = currentNode.next // iterate each node in a list
        currentIndex++; // increment currentIndex 
    }
    return indexes;
}

var list = new LinkedList();

list.addToTail(6);
list.addToTail(19);
list.addToTail(5);
list.addToTail(3);
list.addToTail(5);

console.log(list.indexOf(3));

// Time Complexity 
1. Constant Time - Object(1):
- constant time for adding and removing tails/heads
2. Searching through linked List:
- Linear time complexity
- O(n)