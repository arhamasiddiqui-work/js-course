// TypeScript is a superset of JavaScript, meaning that everything available in JavaScript is also available in TypeScript, and that every JavaScript program is a syntactically legal TypeScript program. Also, the runtime behavior of TypeScript and JavaScript is identical, TypeScript adds compile-time type checking, implementing rules about how different types can be used and combined. This catches a wide variety of programming errors that in JavaScript are only encountered at runtime


/*Type annotation->	Explicitly specify a type	->let age: number = 20;
Type alias->	Give a type a reusable name->	type ID = string \| number;
Type assertion->	Tell TypeScript to treat a value as a specific type	->value as string*/


// e.g: without omitting the type annotation
let myVariable = "Hello World"; //let myVariable: string
// myVariable = 1;  // Error:  // Type 'number' is not assignable to type 'string'.

// e.g:
function fn(left: number, right: number): number {
  return left + right;
}
//fn("hi", "hello"); // Argument of type 'string' is not assignable to parameter of type 'number'.

// e.g: before using ts
const message = "hello!";
// message(); //This expression is not callable. Type 'String' has no call signatures.

// e.g: Explicit Types, param type annotation
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
// greet("Brendan");  //Expected 2 arguments, but got 1.
// greet("Brendan",  Date());  //Argument of type 'string' is not assignable to parameter of type 'Date'
greet("Brendan", new Date()); //constructing a Date with new Date() actually gives us what we were expecting.

// a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:
// string number bigint boolean undefined  symbol null

// e.g:
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}

// promise: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value,
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// syntax: Promise is a built-in JavaScript constructor. You use new to create a Promise object from it
const myPromise = new Promise((resolve, reject) => {
  // Do some task
  resolve("Success!"); // If successful
  // reject("Something went wrong"); // If failed
});
//then : when the Promise succeeds, do this
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// e.g:
const myPromiseEg: Promise<string> = new Promise((resolve, reject) => {
  resolve("Hello");
});
// : Promise<string> → TypeScript: declares the variable's type.
// new Promise(...) → JavaScript: actually creates the Promise.

// e.g: declaring a promise
function doSomething(): Promise<string> {
  return new Promise((success, failure) => {
    //  success(value) provides a successful result:
    success("https://example.com/ingredients.json");
    // failure("Something went wrong.");
  });
}
const listOfIngredients: any = [];

doSomething()
  //then : when the Promise succeeds, do this
  .then((url) => {
    // `return` keyword now included in front of fetch call ,return lets the chain wait for the next Promise.
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients will now contain data from fetch call.
  });

