/*
Call & Apply methods
-> any function defined in javascript, will be able to use the call method. It passes arguments as comma seperated. 
-> Apply method will pass arguments as an array
*/

const car1 = {
    brand: 'Porsche',
    getCarDescription: function(cost, year, color) {
      console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
    }
  };
   
  const car2 = {
    brand: 'Lamborghini'
  };
   
  const car3 = {
    brand: 'Ford'
  };
   
  console.log(car1.getCarDescription(80000, 2010, 'blue'));
  // call getCarDescription method in car2 object
  console.log(car1.getCarDescription.call(car2, 200000, 2013, 'yellow')); 
  // apply getCarDescription method in car 3 object
  console.log(car1.getCarDescription.apply(car3, [35000, 2012, 'black']));