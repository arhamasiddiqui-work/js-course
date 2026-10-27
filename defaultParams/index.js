// Default params:
// syntax:
// function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
//   // …
// }
// e.g:
function defParam(a, b = 1) {
  return a * b;
}

console.log(defParam(5, 2));
// Expected output: 10

console.log(defParam(5));
// Expected output: 5

// The default value is only used if the corresponding argument is undefined
function multiply2(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}
console.log(multiply2(5, 2)); // 10
console.log(multiply2(5)); // 5

// a normal param without having a default value is called a required parameter:
function reqParam(a, b) {
  return a * b;
}
reqParam(5, 2); // 10
reqParam(5); // NaN !

// Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults
function leftToRight(x = 1, y) {
  return x + y;
}
console.log(leftToRight(2)); // [2, undefined]
console.log(leftToRight()); // [1, undefined]

// The default argument is evaluated at call time. Unlike with Python (for example), a new object is created each time the function is called.
function append(value, array = []) {
  array.push(value);
  return array;
}
console.log(append(1)); // [1]
console.log(append(2)); // [2], not [1, 2]

// applying default params on function and variable
function callSomething(thing = something()) {
  return thing;
}
let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled++;
  return numberOfTimesCalled;
}
console.log(callSomething()); // 1
console.log(callSomething()); // 2

//call(): Calls the function immediately, allowing you to set its this value and pass arguments individually
// apply(): Same as call(), but passes arguments as an array
// bind(): creates a new function with a fixed this value, which you can call later

// e.g: cases having defparam / reqparam
function go() {
  return "Testing";
}
function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
    // a= undefined
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
  }
  return [a, b, c, d, e, f, g];
}

console.log(withDefaults.call({ value: "" }));
// [undefined, 5, 5, "Testing", {value: ""}, arguments, "" ]

console.log(withoutDefaults.call({ value: "" }));
// [undefined, 5, 5, "Testing", {value:""}, arguments, ""]


// Destructured parameter with default value assignment: set an empty object/array as the default value for the destructured parameter
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// Works the same for objects:
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2