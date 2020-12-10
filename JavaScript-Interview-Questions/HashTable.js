/*
1. Implementing hash table, first create two constructor functions.
2. Write the hash methods.
3. change the key into number indexes , use charCodeAt() method.

*/
function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}
 
function HashNode(key,value,next) {
    this.key = key;
    this.value = value;
    this.next = next || null; // next parameter specifies next node in bucket
}

// Hash methods
// change keys into number indexes
HashTable.prototype.hash = function(key) {
    var total = 0;
    for(var i =0; i< key.length; i++) {
        total += key.charCodeAt(i); // find each character of unicode
    }
    var bucket = total % this.numBuckets; // if total is greater than number of buckets, use modulus operator
    return bucket;
}

// Insert method
HashTable.prototype.insert = function(key, value) {
    var index = this.hash(key); // what bucket the node in
    console.log('INDEX: ', index);
    if(!this.buckets[index]) {
        this.buckets[index] = new HashNode(key,value); // if the specified bucket is empty
    }
    else if(this.buckets[index].key === key) { // if new key is equal to existing key, then update the new details
        this.buckets[index].value = value;
    }
    else{  // if the bucket contains nodes
        var currentNode = this.buckets[index];
        while(currentNode.next) {
            if(currentNode.next.key === key){ // if the node is already exists, then updaate the node with new info
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key,value);
    }
}

// Get method: retrieve the information of a particular key
HashTable.prototype.get = function(key) {
    var index = this.hash(key);
    if(!this.buckets[index]) return null;
    else {
        var currentNode = this.buckets[index];
        while(currentNode) {
            if(currentNode.key === key) return currentNode.value;
            currentNode = currentNode.next; // travel every node in the bucket
        }
        return null;
    }
}

// retrieveAll method: Retrieve all the info from the table

HashTable.prototype.retriveAll = function() {
    var allNodes = [];
    for(var i =0; i<this.numBuckets; i++) {
        var currentNode = this.buckets[i];
        while(currentNode) {
            allNodes.push(currentNode);
            currentNode = currentNode.next;
        }
     }
     return allNodes;
}

var myHT = new HashTable(30);
// console.log(myHT.hash('Mouni'));
myHT.insert('Mouni','mouni@gmain.com');
myHT.insert('divya','divya@gmail.com');
myHT.insert('Dean','dean@gmail.com');
myHT.insert('Dane','dane@yahoo.com');
myHT.insert('Mouni','mounika@gmail.com');

// console.log(myHT.buckets);
// console.log(myHT.get('Mouni'));
// console.log(myHT.get('Dane'));
console.log(myHT.retriveAll());