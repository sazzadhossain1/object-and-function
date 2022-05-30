// const person = {
//   id: 1,
//   name: "sazzad",
//   "is hard worker": true,
// };

// console.log(person.name);
// console.log(person["name"]);
// console.log(person["is hard worker"]);

// const availability = "is hard worker";
// console.log([availability]);

// const person = {
//   id: 1,
//   name: "sazzad",
//   "is hard worker": true,
//   personDesc: function () {
//     console.log(`${person.name} - ${person.id}`);
//   },
// };
// person.personDesc();
// const person = {
//   id: 1,
//   name: "sazzad",
//   "is hard worker": true,
//   personDesc: function () {
//     return `${person.name} - ${person.id}`;
//   },
// };
// console.log(person.personDesc());

// const product1 = {
//   name: "print T-shirt",
//   price: 10,
//   "is available": true,
//   productDesc() {
//     return `${this.name}-$${this.price}`;
//   },
// };
// const product2 = {
//   name: "sneaker",
//   price: 60,
//   "is available": true,
//   productDesc() {
//     return `${this.name}-$${this.price}`;
//   },
// };
// console.log(product1.name);
// console.log(product1.price);
// console.log(product1.productDesc());
// console.log(product2.name);
// console.log(product2.price);
// console.log(product2.productDesc());

// function product() {
//   return {
//     name: "print T-shirt",
//     price: 10,
//     "is available": true,
//     productDesc() {
//       return `${this.name}-${this.price}`;
//     },
//   };
// }
// console.log(product().name);
// console.log(product().price);
// console.log(product().productDesc());

// function product(name, price, availability) {
//   return {
//     name,
//     price,
//     "is available": availability,
//     productDesc() {
//       return `${this.name}-$${this.price}`;
//     },
//   };
// }
// console.log(product("print T-shirt", 10, true));
// console.log("sneaker", 60, true);

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   this.productDesc = function () {
//     return `${this.name}-$${this.price}`;
//   };
//   return this;
// }

// const product1 = new Product("sneaker", 60);
// console.log(product1.name);
// console.log(product1.productDesc());

// function sayHi(age) {
//   console.log(this);
//   console.log(`hi ${this}.you are ${age}`);
// }

// sayHi.call("sazzad", 25);
