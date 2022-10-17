const regex = /\b(Apple)+\n/g;

const fruit = "Apple, Banana Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
