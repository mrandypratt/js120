class Cat {
  constructor(name) {
    this.name = name;
  }

  personalGreeting() {
    console.log("Hello! My name is " + this.name + "!");
  }

  static genericGreeting() {
    console.log("Hello! I am a cat!");
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();