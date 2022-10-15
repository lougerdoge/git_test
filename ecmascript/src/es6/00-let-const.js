var lastName = "John"; // reassigned
lastName = "Oscar";
console.log(lastName);

let fruit = "Apple"; // reassigned
fruit = "Kiwi";
console.log("Kiwi");

const animal = "Dog"; // can't be reassigned, can be re-declared & hoisted
// Error:
// animal = cat;

const fruits = () => {
  if (true) {
    var fruit1 = "Apple"; // function scope
    let fruit2 = "Kiwi"; // block scope
    const fruit3 = "Banana"; // block scope
  }
  console.log(fruit1);
  // Error:
  // console.log(fruit2);
  // console.log(fruit3);
};

fruits();
