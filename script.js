// // console.log("sudan");
// // alert("hi there, please click ok to complete the rendering");

// //=====variable (only char, num, $ _)

// //var , let , const

// var name; //creating variale
// name = " sudan Basnet"; //assigning value

// let add = "sydney";
// console.log(name, add);

// name = "asmita";
// console.log(name);
// add = "melbourne";
// console.log(add);

// // age= 20; //if we don't declare anything like var or let or const.. it will automatically consider as var
// const age = 20;
// age = 5;
// console.log(age); //can't be changed

//======arithmetic

// const a = 5;
// const b = 6;
// const c = b;

// // +, -, *, **, /,%,++,--
// const result = a + b + c;

// console.log(result);

//====math object

// const answer = Math.PI;
// const answer = Math.round(4.4);
// const answer = Math.pow(8, 2);
// const answer = Math.sqrt(64);
// const answer = Math.ceil(4.9);
// const answer = Math.floor(4.7);
// const answer = Math.min(8, 2, 150, 40, 30, -3, -80);
// const answer = Math.max(8, 2, 150, 40, 30, -3, -80);
// const answer = Math.random(); ///range(0-0.99999999......)
// console.log(answer);

// const maths = Math;
// console.log(maths);

// comparision--->.  it will with give true/false or boolean value, ==, ===, >, >=

// const v1 = 5;
// const v2 = "5";

// const result = v1 == v2;
// console.log(result);

//data types
// primtiive
// string/number/boolean/undefined/null/

// const value = null; //it is used to occupy memory so that we can assign some values later

// console.log(typeof value, value);

//reference data type
//object

// const user = {
//   fname: "sudan",
//   num: 29,
// };

// console.log(user);
// const u1 = user;
// console.log(u1);

// user.fname = "sam";
// console.log(user);
// console.log(u1);
//edited

//number /0-9

//safe number range -2^53-1 to 2^53-1

// const num = 30_345_234_345_345;
// console.log(num);

// const num = "876";
// const val = +num;
// console.log(typeof val, val);
// const num = "876.1234a";
// // const val = parseInt(num); //only integer not decimal

// // const val = parseFloat(num); //integer after decimal...eg..56.35

// const val = parseFloat(num);
// isNaN(val);
// console.log(typeof val, val, isNaN(val));

//string manipulations
//escape character
// const str = 'hi there my name is "sudan basnet" and I live in sydney'; //"\is the escape character"
// console.log(str);
// console.log(str.length);
//length (str.length)
// const val = str.toLowerCase(); //str.toLowerCase() str.toUpperCase()
// const val = str[21];
// const val = str.charAt(21);
// console.log(typeof str);
// const val = str.indexOf("n");
// const val = str.lastIndexOf("n");
// const val = str.replace("sudan", "asmita"); //character replace and is case sensitive
// const val = str.replaceAll("n", "u"); //replace all is needed or else it will only replace one character
// console.log(val);

// const val = str.slice(3, 5); //it means start from index 3 and end with 5 but not including 5 //indexing starts from 0, 1, 2 and so on
// const val = str.slice(3); // it will take all because it doesn't have the end
// const val = str.slice(-5, -3); //it will count from last//count starts from -1 index

// const val = str.includes(" "); //it will search for white space and it depends what input you give to search and it is case sensitive
// const val = str.slice(3);
// const val = str.search("asdfasd");//gives -1 to indicate that there is not this word in the sentence
//const val = str.trim(); trim is used to trim spaces from the string which is at the fromt and back

// const val = str.split("");
// ['h', 'i', ' ', 't', 'h', 'e', 'r', 'e', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', '"', 's', 'u', 'd', 'a', 'n', ' ', 'b', 'a', 's', 'n', 'e', 't', '"', 'a', 'n', 'd', ' ', 'I', ' ', 'l', 'i', 'v', 'e', ' ', 'i', 'n', ' ', 's', 'y', 'd', 'n', 'e', 'y']

// const val = str.split(" ");
//  ['hi', 'there', 'my', 'name', 'is', '"sudan', 'basnet"', 'and', 'I', 'live', 'in', 'sydney'].  //converts into array by seperating with white space
// const val = str.split("i").join("j");

// hj there my name js "sudan basnet" and I ljve jn sydney
// const val = str.concat(" new text");// adding more text with concat or we can use +
//OR
// const val = str + "more content" + "more ";

// console.log(val);

// logical operators &&, ||, !,ternary

// JS-conditional statements

//truthy: true,2,-4, " d",{},[],()=>{}

// falsy: 0, Nan,"",,null, undefined
// const val = {}; //it holds some memory even if it is empty
//if else

// if(condition){        //only executes if the condition is a truthy value
//     //statement
// }
//! will convert truthy to falsy and vice versa

// const age = 17;
// const vip = false;

// if (age >= 18 && age < 50) {
//   console.log("welcome to the coding party");
// }

// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("welcome to the coding party");
// }

//if else
// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("welcome to the coding party");
// } else {
//   console.log("you are not allowed");
// }

//elseif
// if (age >= 18 && age < 50) {
//   console.log("welcome to the coding party");
// } else if (vip === true) {
//   console.log("you are not allowed");
// } else {
//   console.log("who are you");
// }

//switch
// const pet = "cow";
// switch (pet) {
//   case "cat":
//     console.log("meow");
//     break;

//   case "dog":
//     console.log("whoof");
//     break;
//   case "cow":
//     console.log("moo");
//     break;
//   default:
//     console.log("wrong pet");
// }

//logical oeprators
// const age = true;
// const vip = false;

// age < 50 && console.log("welcome");

// const val = age || "N/A";
// console.log(val);

//ternary
// condition1 ? //run this code is : //run this code

// const age = 50;
// age < 50 ? console.log("welcome") : console.log("go home");

//Array []

// const val = ["sudan", 345, "asds", null, undefined, [3, 4, 5, 6], {}, () => {}];
// console.log(val);

// const fruits = ["apple", "mango", "banana", "orange"];
// const value = fruits.length;
// console.log(fruits, value);

//adding items

// fruits.push("watermelon"); //pushes on the last
// console.log(fruits);
// fruits.unshift("kiwi"); //adds to the front
// console.log(fruits);
// fruits.splice(2, 0, "plum"); //(index, center value is 0 if we are not deleting anything)

//deleting items from the array
// fruits.pop(); //take the items from the last by default
// const val = fruits.shift(); //last fruit is removed and assigned to variable val and it is out of the array
//  ['apple', 'mango', 'banana'] 'orange'
// const val = fruits.splice(2, 2); //no items to remove from array as 0 is given and it will assign that to array val, splice will create an array

// const val = fruits.slice(2, 2); //go to index 2 and until 2 but not include 2
// const val = fruits.slice(2, 4); //it will not modify the original one
// const val = fruits.toString();//to string
// const val = fruits.toString().split(",");//to string and again to array

// const val = fruits.indexOf("mangos");//gives -1 if not found
// const val = fruits.includes("mangos"); //returns true or false
// const val = fruits.join("_");//converts into string with _
// console.log(fruits.sort()); //sorts in alphabetical if there are strings
// console.log(fruits, val);
// console.log(fruits.sort((a, b) => a - b));

// fruits.reverse();
// console.log(fruits);

//loops
//for loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//while loops
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
//do while
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//break and continue

// for (let i = 0; i <= 100; i++) {
//   //   console.log(i);
//   //   if (i == 10) {
//   //     break;
//   //   }

//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

// java array specific loops

//for /of for(x of cars). -> for ()array
// const fruits = ["apple", "mango", "banana", "orange"];
// console.log(fruits);
// const upperFruits = [];

// for (let item of fruits) { //it will access all items from fruit
//   upperFruits.push("sku-" + item.toUpperCase());
//   console.log(item);
// }
// console.log(upperFruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

//for each()
//for each()will not allow to create new array. you have to create an empty array and keep pushing to that array
// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });
//map() helps to create new array unlike foreach()
// const newData = fruits.map((item, i) => {
//   if (item.includes("n")) {
//     return item;
//   }
//   //   console.log(item, i);
//   //   return "SKU" + item.toUpperCase();
// });

//filter ()

// const newData = fruits.filter((item, i) => item.includes("n")); //removed the curly bracket  item.includes("n")
// //   return item.includes("n");it works same as
// //   //   if (item.includes("n")) {
// //   //     return true;
// //   //   } else {
// //   //     return false;
// //   //   }

// console.log(newData);

// reduce()

// const money = [12, 234, 3456, 345, 345, 345, 6534];
// const total = money.reduce((subtotal, item) => {
//   return subtotal + item;
// }, 0); //0 is the initial value to add
// console.log(money);
// console.log(total);

//every()
// const fruits = ["apple", "mango", "banana", "orange"];
// const result = fruits.every((item) => {
//   console.log(item);
//   return item.includes("a"); //test condition
// });

// console.log(result);

//includes(), find and indexOf()

// const money = [12, 234, 3456, 345, 345, 345, 6534];
// // const result = money.includes(12); //returns boolean true or false
// // const result = money.find((item) => {
// //   return item === 3245;
// // });
// // const result = money.find((item) => item === 3245); //anonymous function

// const result = money.indexOf(12); //returns index if present in array
// //returns -1 if there are no items present
// console.log(result);

// const arrays = new Array(10).fill("💕");

// console.log(arrays);

//  Challenge #1
// 1. create an array of 50 random numbers range between 1 and 100 programmatically

//2. sort the array in descending order

//3. get total of the array

//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.

// 5. remove duplicate number for the original array

// const Arrays = new Array(50).fill(Math.random());
// const randomArrays = Arrays * 10;
// const array = [];

// for (let i = 0; i < 50; i++) {
//   array.push(Math.floor(Math.random() * 100));
// }

// console.log("Original:", array);

// // Create sorted copy
// const sortedArray = [...array].sort((a, b) => a - b);
// console.log("Sorted:", sortedArray);

// // Split function
// const splitArray = (arr) => {
//   const mid = Math.ceil(arr.length / 2);
//   return [arr.slice(0, mid), arr.slice(mid)];
// };

// const result = splitArray(sortedArray);
// console.log("Split:", result);
//  Challenge #1

// // 1. create an array of 50 random numbers range between 1 and 100 programmatically
// const arg = [];

// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   arg[i] = num;
// }
// //2. sort the array in descending order
// arg.sort((a, b) => b - a);
// // console.log(arg);

// //3. get total of the array
// const total = arg.reduce((acc, num) => acc + num);

// console.log(total);

//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.
// const evenArg = arg.filter((item) => item % 2 === 0);
// const oddArg = arg.filter((item) => item % 2 !== 0);

// console.log(evenArg, oddArg);

// 5. remove duplicate number for the original array
// const uniqueArg = [...new Set(arg)];
// const uniqueArg = [];
// for (let i = 0; i < arg.length; i++) {
//   if (!uniqueArg.includes(arg[i])) {
//     uniqueArg.push(arg[i]);
//   }
// }

// const uniqueArg = [];
// for (let i = 0; uniqueArg.length < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (!uniqueArg.includes(num)) {
//     uniqueArg.push(num);
//   }
//   //   console.log(i);
// }
// console.log(uniqueArg);
//simple chat bot made but not working
// const questions = ["hello", "how are you", "name", "help", "bye"];
// const answers = [
//   "Hi",
//   "I am all good",
//   "I am your chatbot",
//   "Try saying Hello or bye",
//   "See you later",
// ];

// function sendMessage() {
//   const input = document.getElementById("userInput");
//   const chat = document.getElementById("chat");
//   const userText = input.value.toLowerCase();

//   //show user message
//   CharacterData.innerHTML += "<p> You:" + userText + "</p>";
//   let reply = "I don't understand";

//   //search matching question
//   for (let i = 0; i < questions.length; i++) {
//     if (userText.includes(questions[i])) {
//       reply = answers[i];
//       break;
//     }
//   }
//   chat.innerHTML += "<p>Bot" + reply + "</p>";
//   input.value = "";
// }

//data manipulation (objects)
// const person = {
//   name: "sudan basnet",
//   phone: 1234234,
//   isMarried: true,
//   skills: ["HTML", "CSS", "javascript", ["flex", "grid"]],
//   hasPet: undefined,
//   parents: {
//     f: "harry",
//     m: "merry",
//   },
//   bio: () => {
//     return "hi there";
//   },
// };

// const data = person.name;
// const data = person["parents"];
// const data = person.skills[1];
// const data = person.skills[3][1];
// const data = person.parents.f;
// const data = person.bio();

//updating the object
// person.name = "Asmita";
//adding new property
// person.address = "2 railway pde";
// person.parents.md = "2020";
// person.skills.push("any");
// person.skills[3].push(123);

// console.log(person);

//delete data
// person.phone = undefined;
//delete.person.phone;  it will delete but it stills hold memory.
//person.skills.pop();
// delete person.parents.f;

// console.log(person);

//destructuring:const {name}= obj

// const person = {
//   name: "sudan basnet",
//   phone: 1234234,
//   isMarried: true,
//   skills: ["HTML", "CSS", "javascript", ["flex", "grid"]],
//   hasPet: undefined,
//   parents: {
//     f: "harry",
//     m: "merry",
//   },
//   bio: () => {
//     return "hi there";
//   },
// };

// const userName = person.name;
// console.log(name);

// const { name, phone, parent, room = "N/A" } = person;
// // console.log(parents.f);

// console.log(name, phone);
// console.log(f, m);

//REST METHOD
// const { name, phone, parents, ...restOfTheProperties } = person;

// console.log(restOfTheProperties);

// //spread
// const career = {
//   title: "soft eng",
//   salary: "150k",
// };

// // const combo = { ...career }; //taking the property and spreading inside the object

// // console.log(combo);

// //shallow vs deep copy (objects)

// const person = {
//   name: "sudan basnet",
//   phone: 1234234,
//   isMarried: true,
//   skills: ["HTML", "CSS", "javascript", ["flex", "grid"]],
//   hasPet: undefined,
//   parents: {
//     f: "harry",
//     m: "merry",
//   },
//   bio: () => {
//     return "hi there";
//   },
// };

// //shallow copy
// // // const p1 = person;
// // const p1 = { ...person };
// // console.log(person);
// // // console.log(p1);
// // // const p1 = Object.assign({}, person);
// // person.parents.f = "asmita";
// // person.name = "Sudan";
// // console.log(person);
// // console.log(p1);

// //here only first level property is copied while nested object will have same reference to the object

// //deep copy
// // converting object into strings
// // const p1 = JSON.stringify(person);

// // const p1 = JSON.parse(JSON.stringify(person));
// // console.log(p1);
// // person.parents.f = "asmita";
// // person.name = "Sudan";
// console.log(person);
// // console.log(p1);
// for (let key in person) {
//   //key is a variable here
//   // console.log(key);
//   console.log(key, ":", person[key]);
// }

// // const personArg = Object.entries(person);
// // const personArg = Object.keys(person);
// const personArg = Object.values(person);

// console.log(personArg);

// Date Manipulation
// const today = Date();
// const today = new Date();
// const today = Date.now();
// const data = today.getDate();
// const data = today.getFullYear();
// const today = new Date("2020-8-29");
// const data = today.getDay();
// const data = today.getMonth();
// const data = today.toLocaleTimeString();
// const data = today.toLocaleDateString();
// const data = today.toISOString();
// today.setDate(today.getDate() + 10);

// console.log(today.getTime());
