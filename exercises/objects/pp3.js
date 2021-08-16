function objectsEqual(obj1, obj2) {
  let same = true;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) same = false;
  }
  for (let key in obj2) {
    if (obj2[key] !== obj1[key]) same = false;
  }

  return same;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false