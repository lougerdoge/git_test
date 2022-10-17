class goodUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods
  #speak() {
    // Private method
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
