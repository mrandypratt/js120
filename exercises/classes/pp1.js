console.log("The objects:")
console.log("------------")

console.log("Hello");
console.log([1,2,3]);
console.log({name: 'Srdjan'});

console.log("\nThe Object's Own Properties:")
console.log("------------")

console.log(Object.getOwnPropertyNames("Hello"));
console.log(Object.getOwnPropertyNames([1,2,3]));
console.log(Object.getOwnPropertyNames({name: 'Srdjan'}));

console.log("\nThe Objects' Dunder Proto:")
console.log("------------")

console.log("Hello".__proto__);
console.log([1,2,3].__proto__);
console.log({name: 'Srdjan'}.__proto__);

console.log("\nThe Objects' Dunder Proto Properties:")
console.log("------------")

console.log(Object.getOwnPropertyNames("Hello".__proto__));
console.log(Object.getOwnPropertyNames([1,2,3].__proto__));
console.log(Object.getOwnPropertyNames({name: 'Srdjan'}.__proto__));

console.log("\nThe objects' Constructor:")
console.log("------------")

console.log("Hello".constructor);
console.log([1,2,3].constructor);
console.log({name: 'Srdjan'}.constructor);

console.log("\nThe objects' constructor properties:")
console.log("------------")

console.log(Object.getOwnPropertyNames("Hello".constructor));
console.log(Object.getOwnPropertyNames([1,2,3].constructor));
console.log(Object.getOwnPropertyNames({name: 'Srdjan'}.constructor));

console.log("\nThe objects' prototype property:")
console.log("------------")

console.log("Hello".prototype);
console.log([1,2,3].prototype);
console.log({name: 'Srdjan'}.prototype);

// console.log("\nThe objects' prototype properties:")
// console.log("------------")

// console.log("TypeError: Cannot convert undefined or null to object\nObject.getOwnPropertyNames('Hello'.prototype)")
// // console.log(Object.getOwnPropertyNames("Hello".prototype));
// // console.log(Object.getOwnPropertyNames([1,2,3].prototype));
// // console.log(Object.getOwnPropertyNames({name: 'Srdjan'}.prototype));

// console.log("\nThe objects' prototype's Dunder Proto:")
// console.log("------------")

// console.log("TypeError: Cannot read property '__proto__' of undefined\nconsole.log('Hello'.prototype.__proto__)")

// // console.log("Hello".prototype.__proto__);
// // console.log([1,2,3].prototype.__proto__);
// // console.log({name: 'Srdjan'}.prototype.__proto__);

// console.log("\nThe objects' prototype's Dunder Proto properties:")
// console.log("------------")

// console.log(Object.getOwnPropertyNames("Hello".prototype.__proto__));
// console.log(Object.getOwnPropertyNames([1,2,3].prototype.__proto__));
// console.log(Object.getOwnPropertyNames({name: 'Srdjan'}.prototype.__proto__));

// console.log("\nThe objects' prototype's Constructor:")
// console.log("------------")

// console.log("Hello".prototype.constructor);
// console.log([1,2,3].prototype.constructor);
// console.log({name: 'Srdjan'}.prototype.constructor);

// console.log("\nThe objects' prototype's Constructor properties:")
// console.log("------------")

// console.log(Object.getOwnPropertyNames("Hello".prototype.constructor));
// console.log(Object.getOwnPropertyNames([1,2,3].prototype.constructor));
// console.log(Object.getOwnPropertyNames({name: 'Srdjan'}.prototype.constructor));