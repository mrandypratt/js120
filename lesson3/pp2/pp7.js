let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}


// // Option 1: Prototype
// let ninjaB = {};
// Object.setPrototypeOf(ninjaB, ninjaA);

// // Option 2: Access the constructor function as a property of the original instance
// let ninjaB = new ninjaA.constructor();

// Wrong answer: Create 
// This option sets prototype to Ninja
let ninjaB = Object.create(ninjaA);

console.log(ninjaA.constructor === ninjaB.constructor) // => true
console.log(Object.getPrototypeOf(ninjaB))
console.log(Object.getPrototypeOf(ninjaA))
console.log(ninjaB.constructor)
console.log(ninjaB.swung)
console.log(ninjaB)