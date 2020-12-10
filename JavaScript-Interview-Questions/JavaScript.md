1. ### What is a Constructor function in JavaScript ?

   A constructor function is simply a function that creates an object class and allows you to create multiple instances of that class very easily.
   This means is that they allow you to create a lot of objects very quickly and these objects will all have the same properties and the same functionality because they are all part of the same class.

      >
        function Student(name, address, grade) {
            this.name = name,
            this.address = address,
            this.grade = grade
        }
        var student1 = new Student('mouni', 'hyd', 'A');

        => student1
        Student {name: "mouni", address: "hyd", grade: "A"}
    - **this** keyword refers to the object that is created by the  constructor function.

2. ### Define Prototype object in JavaScript ?
   
   Prototype is an object in JavaScript. Each object have prototype. In JavaScript, inherit methods and properties from a prototype. It is allow to access the properties and methods from existing object. We will use the prototype instead of the constructor function.

3. ### 