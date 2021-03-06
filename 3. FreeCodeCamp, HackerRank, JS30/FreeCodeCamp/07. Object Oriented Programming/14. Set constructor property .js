// Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype

/*
1. There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property!
2. This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false

Example:
duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works

3. To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

*/

/*
Define the constructor property on the Dog prototype.
*/

function Dog(name) {
	this.name = name;
}

// Only change code below this line
Dog.prototype = {
	constructor: Dog, // now, constructor  Dog is set again
	numLegs: 4,
	eat: function () {
		console.log("nom nom nom");
	},
	describe: function () {
		console.log("My name is " + this.name);
	},
};
