const user = { username: "faker", age: 26, country: "KO" };
const { username, ...values } = user;
console.log(username);
console.log(values);
