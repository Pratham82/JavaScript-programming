// ES6: Use class Syntax to Define a Constructor Function

/*
ES6 provides a new syntax to create objects, using the class keyword.
the class syntax is just syntax, and not a full-fledged class-based implementation
of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

*The class syntax simply replaces the constructor function creation:
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

the class keyword declares a new function, to which a constructor is added.
This constructor is invoked when new is called to create a new object.

* Use UpperCamelCase for declaring class
* The constructor method is a special method for creating and initializing an object created with a class.
*/


// Only change code below this line

class Vegetable{
    constructor(name){
        this.name = name;
    }
}

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
