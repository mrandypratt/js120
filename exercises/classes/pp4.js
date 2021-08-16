class Cat {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`Hello! I am ${this.name}!`)
  }
}

let kitty = new Cat("Mr. Kitty Muffins");
kitty.greeting();