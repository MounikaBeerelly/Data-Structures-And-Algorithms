1. ### What are Data Structures ?

   - A way of organizing data, that is stored in a computer or database.
   - Many different types of data structures are there (Linked list, Binary search trees, Hash tables ).
   - Each type of data structure represents a different way of organizing the data.

2. ### Why do we have different types of data structures ?

   - Each data structures have different strengths and weeknesses.
   - Some are fast at storing and recording data, while others are not.
   - Some are fast at searching and retrieving data, while others are not.
   - So each type of data structure can be useful for different reasons.

3. ### Why are data structures important to know in JavaScript ?

   - Run the application smoothly, effictient and quickly.
   - Understanding of programming in JavaScript ( Many of these concepts we will cover in this course such as constructor functions,recursion, this keyword, prototype object and Big O notation ).
   - Many programming interviews both large companies like Google,Facebook and Amazon as well as at smaller startup companies you will be asked to implement encode.

4. ### Define Linked List ?
 
   - It is a list of elements called nodes that are connected together or linked together in a single file line.
   - There are two types of linked lists a singly linked list and a doubly linked list.
   - In **Singly Linked List** each node only has reference to the next node.
        >
           A ----> B -----> C
   - In **Doubly Linked List** each node has reference to the next node and previous one.
        >
           A <----> B <----> C
Advantages: nodes can easily be added and removed from the linked list without reorganizing the entire data structure.
Desadvantages: search operations are slow in linked lists. It uses more memory

5. ### Define Binary Search tree ?

   - Binary search tree is a collection of nodes, that all are connected together in certain way.
   - Each node in binary search contains two nodes, left node and right node.
   - And each node contains data, it holds any data type as a value.
   - In Binary Search Tree, all of the Left nodes will be less than
     or equal value to their parent node and all of our right nodes will be  greater value than their parent node.

6. ### Define different methods in Binary Search Tree ?

   - It will have a "contains" method on our binary search tree that will take in some value and find that value is in the binary search tree or not.
   - Traversing each node in a BST, we will use depth first traversal method and a breath first traversal method.
   - The difference between these two methods is what pattern we traverse the tree in. In depth first traversal, we will start at the top and follow each branch all the way down to its bottom.
   - In breath first traversal we will also start at the top. But we will go across each level before moving down to the next level.
