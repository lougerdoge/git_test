// Declaring
class User {}

// Class instance
// const newUser = new User();

class user {
  // Methods
  greeting() {
    return "Hello";
  }
}

const bacteroid = new user();
console.log(bacteroid.greeting());
const spicy = new user();
console.log(spicy.greeting());

// Constructor

class niceUser {
  // Constructor
  constructor() {
    console.log("New nice user!");
  }
  greeting() {
    return "Hello";
  }
}

const john = new niceUser();

// This

class cuteUser {
  constructor(name) {
    this.name = name;
  }
  // Methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const anna = new cuteUser("Anna");
console.log(anna.greeting());

// Setters and getters

class goodUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const puppy = new goodUser("Waldo", 15);
console.log(puppy.uAge);
console.log((puppy.uAge = 20));
