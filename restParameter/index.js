// rest parameters: allows a function to accept an indefinite number of arguments as an array, can only be the last parameter
// syntax:
function f(a, b, ...theArgs) {
  // …
}

// e.g 1:
function RestParamEg(a, b, ...args) {
  console.log("a", a); //1
  console.log("b", b); //2
  console.log("args", args); // [3, 4, 5]
}
RestParamEg(1, 2, 3, 4, 5);

// e.g 2:  Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned
function multiply(multiply, ...theArgs) {
  return theArgs.map((v) => v * multiply);
}
console.log(multiply(2, 1, 3, 4, 5));

// rest parameter may be destructured, which allows you to ignore certain parameter position
function ignoreFirst(...[, b, c]) {
  return b + c;
}

// From arguments to an array: Rest parameters were introduced to reduce the boilerplate code that was commonly used for converting a set of arguments to an array.
// Array methods can be used on rest parameters, but not on the arguments object
function sortRestArgs(...theArgs) {
  const sortedArgs = theArgs.sort();
  return sortedArgs;
}
// console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7
// function sortArguments() {
//    const sortedArgs = arguments.sort();
//   return sortedArgs; // this will never happen
// }
// console.log(sortArguments(5, 3, 7, 1)); // throws a TypeError (arguments.sort is not a function)

function fn(...args) {
  const normalArray = args;
  const first = normalArray.shift(); // OK, gives the first argument
  return first;
}
console.log(fn(1, 2, 3));
