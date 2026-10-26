// syntax:
// The name of the function.
//  list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }
function square(number) {
  return number * number;
}
console.log(square(2));

// Passing an object to a function: if the function changes the object's properties, that change is visible outside the function
function myObj(theObject) {
  theObject.make = "BMW";
}
const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};
console.log(myCar.make); // Honda
myObj(myCar);
console.log(myCar.make); // BMW

// Passing an array to a function: if the function changes the array's elements, that change is visible outside the function
function myArr(theArr) {
  theArr[0] = 35;
}
const Arr = [1, 2];
console.log(Arr[0]); // 1
myArr(Arr);
console.log(Arr[0]); // 35

// function expression: used to define a function inside an expression, can also use function declaration instead
// syntax:
//  const expression= function (parameters) {statements}
const getRectArea = function (width, height) {
  return width * height;
};
console.log(getRectArea(3, 4));

// Arrow function:
// syntaxes:
// () => expression,
//  (param) => expression,
// () => {statements},

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length)); // [8, 6, 7, 9]]

// Traditional anonymous function
(function (a, b) {
  const chuck = 12;
  console.log(a + b + chuck);
  return a + b + chuck;
})(1, 2);

// Arrow function
((a, b) => {
  const chuck = 42;
  console.log(a + b + chuck);
  return a + b + chuck;
})(1, 2);

//  Assigning a arrow function to a variable
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable

// A function that returns a function or takes other functions as arguments is called a higher-order function.
function sayHello() {
  return () => {
    console.log("Hello");
  };
}

// Arrow function expressions should only be used for non-method functions because they do not have their own this, cant be used as constructor
const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};
obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }

// e.g:
const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((even) => even % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2); //map()->changes each item in an array into something else and returns a new array.
// [10, 12, 26, 0, 2, 36, 46]

const sorted = arr.sort((a, b) => a - b);
// [23, 18, 13, 6, 5, 1, 0]
