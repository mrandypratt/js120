// Constructor Function which adds "swung" property to object
function Ninja() {
  this.swung = true;
}

// New Object passed into Ninja
let ninja = new Ninja();

// Adds a "swingSword" property which stores a function which can be invoked by any "Ninja" object
Ninja.prototype.swingSword = function() {
  return this.swung; //returns the value in "swung" property
};

console.log(ninja.swingSword());