let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo += 1;
console.log(qux.foo);