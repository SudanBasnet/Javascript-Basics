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
