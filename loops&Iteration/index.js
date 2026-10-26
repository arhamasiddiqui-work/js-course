// for loop : repeats until a specified condition evaluates to false.
// syntax:
for (initialization; condition; increment) {
  statement;
}

// e.g:
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop :  executes its statements as long as a specified condition evaluates to true..
// syntax:
while (condition) {
  statement;
}

// e.g:
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// e.g 2: After the first pass: n = 1 and x = 1, After the second pass: n = 2 and x = 3, After the third pass: n = 3 and x = 6
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(n, x);
}

// do-while loop :  executes its statements once, and then repeats as long as a specified condition evaluates to true.
// syntax:
do {
  statement;
} while (condition);

// e.g:
let j = 0;
do {
  j += 1;
  console.log(j);
} while (j < 5);

//  for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols)
// syntax:
for (variable in object)
  statement

// e.g:
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// e.g 2:
function ReturnProperties_Values(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName} ${i} = ${obj[i]}\n`;
  }
  console.log(result);
  return result;
}
ReturnProperties_Values({ a: 1, b: 2, c: 3 }, "object");

// for of:
// syntax:
for (variable of iterable)  // iterable means an object that can be iterated over
  statement

// e.g:
const array = [1, 2, 3];
for (const value of array) {
  console.log(value);
}

// for...in iterates over property names/keys(including array index), for...of iterates over property values
const arr = [3, 5, 7];
arr.random = "hello";

for (const i in arr) {
  console.log(i);
}
//Logs: "0" "1" "2" "random"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7
