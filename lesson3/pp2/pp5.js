// Constructor Function which adds "swung" property to object
function Ninja() {
  this.swung = true;
}


// New Object passed into Ninja constructor
let ninja = new Ninja();


// //This code will work because the original prototpye property referenced by the instance of Ninja is updated
// //This code will run even if the prototype property is reassigned later, because only the pointer is reassigned, not the object in memory
Ninja.prototype.swingSword = function() {
    return this.swung;
},


// Ninja Prototype Property is over-written which nullifies the prototype functionality preserved in he above function
// This happens because the ninja object inherited a pointer to the original Ninija.prototype which is now no longer valid
Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

/*
Searches ninja for "swingSword" method and does not find
Searches the prototype of ninja, which is Ninja.prototype
Finds swingSword method in Ninja.prototype
Cannot find Ninja.prototype since it's original reference is overwritten with a new object

*/

console.log(ninja.swingSword());