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

function f() {
  let a = "a";
  if (true) {
    let a = "zzz";
    console.log(a);
  }
  console.log(a);
}

f();
