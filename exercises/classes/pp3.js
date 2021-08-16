class Cat {
  constructor(name) {
    this.name = name;
    console.log(`Hello! I am ${this.name}!`)
  }
}

let kitty = new Cat("Mr. Kitty Muffins");
kitty.greeting();