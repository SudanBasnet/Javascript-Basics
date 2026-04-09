var globalVar = "global";

function outerFunctionScope() {
  var outerFunVar = "Outer";
  function innerFunctionScope() {
    var innerFunVar = "inner";
    // console.log(innerFunctionScope);
    // console.log(outerFunVar);
    // console.log(globalVar);
  }
  innerFunctionScope();
}

outerFunctionScope();
