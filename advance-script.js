// var globalVar = "global";

// function outerFunctionScope() {
//   var outerFunVar = "Outer";
//   function innerFunctionScope() {
//     var innerFunVar = "inner";
//     // console.log(innerFunctionScope);
//     // console.log(outerFunVar);
//     // console.log(globalVar);
//   }
//   innerFunctionScope();
// }

// outerFunctionScope();

//Hoisting

//moving variables or function declarartions to the top of their context

//how and where you create a variable determines the hoisting

// function f() {
//   let a = "a";
//   if (true) {
//     let a = "zzz";
//     console.log(a);
//   }
//   console.log(a);
// }

// f();

//clouser
//allowing a function to remember and access its lexical scope even when it's executing outside its original scope
//a function inside a function can have access to the variable defined in the parent function even parent function finish executing

// function f() {
//   let counter = 0;
//   return function () {
//     return counter++;
//   };
// }

// const v1 = f();
// // console.log(v1());
// // console.log(v1());
// // console.log(v1());
// // console.log(v1());
// // console.log(v1());
// let counter = 0;
// for (let i = 0; i < 5; i++) {
//   function print() {
//     console.log(i + " but counter is " + counter++);
//   }
//   setTimeout(print, 0);
// }

//OOP

//object

// const person = {
//   name: "sudan",
//   add: "sydney",
//   bio() {
//     console.log(this);
//     return `hey this is ${this.name}, live in ${this.add}`;
//   },
// };

// console.log(person.bio());

//factory function

// function aboutPerson(name, add) {
//   return {
//     name,
//     add,
//     bio() {
//       return `hey this is ${this.name}, live in ${this.add}`;
//     },
//   };
// }

// const sudObj = aboutPerson("sudan", "sydney");
// console.log(sudObj, sudObj.bio());

// constructor function
// function AboutPerson(name, add) {
//   this.name = name;
//   this.add = add;
// }
// AboutPerson.prototype.bio = function () {
//   return `hey this is ${this.name}, live in ${this.add}`;
// };
// const sudObj = new AboutPerson("sudan", "sydney");
// console.log(sudObj, sudObj.bio());

// class based OOP

// class Person {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//   }
//   bio() {
//     return `hey this is ${this.name}, live in ${this.add}`;
//   }
//   nameUpper() {
//     this.name = this.name.toUpperCase();
//   }
// }

// const sudobj = new Person("sudan", "address");
// console.log(sudobj.bio());
// sudobj.nameUpper();
// console.log(sudobj.bio());
// console.log(sudobj);

//procedural PP

// const sudobj = {
//   name: "sudan",
//   add: "sydney",
//   dob: "2000-1-1",
// };

// // function bio(p) {
// //   return `this is ${p.name} from ${p.add} and I am ${getAge(p.dob)} years of old`;
// // }

// // function getAge(dob) {
// //   return new Date().getFullYear() - new Date(dob).getFullYear();
// // }

// // function birthday(p) {
// //   return `happy birthday ${p.name}!! Now you are ${getAge(p.dob) + 1} years old`;
// // }

// // console.log(birthday(sudobj));

// //4 pillars of OOP

// //Encapsulation /abstraction

// class Person {
//   #dob;
//   constructor(obj) {
//     this.name = obj.name;
//     this.add = obj.add;
//     this.#dob = obj.dob;
//   }

//   bio() {
//     return `this is ${this.name} from ${this.add} and I am ${this.#getAge(this.#dob)} years of old`;
//   }
//   #getAge() {
//     return new Date().getFullYear() - new Date(this.#dob).getFullYear();
//   }
//   birthday() {
//     return `happy birthday ${this.name}!! Now you are ${this.#getAge(this.#dob) + 1} years old`;
//   }
// }

// const sudanInfo = new Person(sudobj);
// console.log(sudanInfo);

// inheritance

// const sudobj = {
//   name: "sudan",
//   add: "sydney",
//   dob: "2000-1-1",
// };

// function bio(p) {
//   return `this is ${p.name} from ${p.add} and I am ${getAge(p.dob)} years of old`;
// }

// function getAge(dob) {
//   return new Date().getFullYear() - new Date(dob).getFullYear();
// }

// function birthday(p) {
//   return `happy birthday ${p.name}!! Now you are ${getAge(p.dob) + 1} years old`;
// }

// console.log(birthday(sudobj));

//4 pillars of OOP

//Encapsulation /abstraction

// class Living {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//   }
//   bio() {
//     return `this is ${this.name} from ${this.add}`;
//   }
// }

// class Person extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);

//     this.career = obj.career;
//   }

//   mycareer() {
//     return `their career is ${this.career}`;
//   }
// }

// // class Animal extends Living {
// //   constructor(obj) {
// //     super(obj.name, obj.add);

// //     this.strength = obj.strength;
// //   }

// //   strength() {
// //     return `their strength is ${this.strength}`;
// //   }
// // }

// const p1 = {
//   name: "sudan",
//   add: "sydney",
//   career: "soft.engineer",
// };

// const monkey1 = {
//   name: "monkey",
//   add: "zoo",
//   strength: "can jump betn trees",
// };

// const mkInfo = new Animal(monkey1);
// console.log(mkInfo.bio());

// const P1 = new Person(p1);
// console.log(P1.mycareer());

//polymorphism
// class Student extends Person {
//   constructor(s1) {
//     super(s1);
//   }
//   mycareer() {
//     return `currently studying ${this.career}`;
//   }
// }

// const s1 = {
//   name: "asmita",
//   add: "sydney",
//   career: "AIN",
// };
// const s1info = new Student(s1);
// console.log(s1info.mycareer());

//abstraction

// class Living {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//     if (new.target === Living) {
//       throw new Error("can't instantiate abstract class directly");
//     }
//   }
//   bio() {
//     return `this is ${this.name} from ${this.add}`;
//   }
// }

// class Person extends Living {
//   constructor(obj) {
//     super(obj.name, obj.add);

//     this.career = obj.career;
//   }

//   mycareer() {
//     return `their career is ${this.career}`;
//   }
// }

// const p1 = {
//   name: "sudan",
//   add: "sydney",
//   career: "soft.engineer",
// };

// // const P1obj = new Living("asmita", "sydney");

// // console.log(P1obj.bio());

// const P1obj = new Person(p1);

// console.log(P1obj.bio());

//Functional Programming

// const person = Object.freeze({
//   name: "sudan",
//   career: "soft eng",
// });

// const newP = { ...person, name: "Sam" };
// console.log(person, newP);

//pure Function

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 3));

//impure functions
// let total = 0;
// const add = (a, b) => {
//   total = a + b;
//   return total;
// };
// console.log(add(2, 3));

//First class citizen and higher order Function

// const add = (a, b) => {
//   return a + b;
// };
// const sub = (a, b) => {
//   return a - b;
// };

// const multSqr = (val, exponent) => {
//   return Math.pow(val, exponent);
// };

// const calculator = (func, x, y) => {
//   return func(x, y);
// };

// const result = calculator(add, 2, 3);
// console.log(calculator(add, 2, 3));
// console.log(multSqr(3, 3));

// const calc2 = (a, b) => {
//   const ttl = a + b;
// const multSqr = (exponent) => {
//   return Math.pow(ttl, exponent);
// };
//   return multSqr;
// };

// // const total = calc2(2, 3);
// const data = calc2(2, 3)(2);
// console.log(data);

//function composition

// const calc3 = (a, b, c) => multSqr(add(a, b), c);
// console.log(calc3(2, 4, 2));

//recursion function

// debugger;
// let i = 0;
// const counter = () => {
//   console.log(i++);
//   if (i === 10) {
//     return;
//   }
//   counter();
// };

// console.log(counter());
// console.log(i);

// let sum = 0;
// const totaling = (nums) => {
//   sum += nums.pop();
//   if (!nums.length) {
//     return sum;
//   }
//   return totaling(nums);
// };

// const nums = [23, 234, 345, 54, 234];

// console.log(totaling(nums));
