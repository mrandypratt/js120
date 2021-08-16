class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck {
  startEngine(speed) {
    return `Ready to go! Drive ${(speed)}, please!`;
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));