/* 
This keyword:
1. in javascript, this is a keyword it represents the global window object.
2. in object, it refers to the owner of the object.
*/

var house = {
    price : 100000,
    squareFeet : 1000,
    owner: 'Xyz',
    getPricePerSquareFeet : function() {
        return house.price / house.squareFeet;
    }
};
console.log(house.price);
console.log(house.getPricePerSquareFeet());

// use this keyword in the above code insted of house
var house = {
    price : 100000,
    squareFeet : 1000,
    owner: 'Xyz',
    getPricePerSquareFeet : function() {
        return this.price / this.squareFeet;
    }
};
console.log(house.price);
console.log(house.getPricePerSquareFeet());