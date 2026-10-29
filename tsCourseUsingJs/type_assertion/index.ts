// TypeAssertion: as in TypeScript is a type assertion. It tells TypeScript to treat a value as a particular type.
// For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.
// In this situation, you can use a type assertion to specify a more specific type
const myCanvas1 = document.getElementById("myCanvas") as HTMLCanvasElement;

// can also use the angle-bracket syntax
const myCanvas2 = <HTMLCanvasElement>document.getElementById("myCanvas");


const variable: string = "123";
const variable2 = variable as unknown as number;  //changing type



// Type assertions example:
// const x="hello" as number;  //Conversion of type 'string' to 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first

// literal type
let x: "hello" = "hello";
// OK
x = "hello";
// x = "howdy";     // Type '"howdy"' is not assignable to type '"hello"'.

// literal type with union & functions that only accept a certain set/sequence of known values:
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre");  //Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

// Literal Inference:
declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);  // Argument of type 'string' is not assignable to parameter of type "GET" | "POST"

// You can change the inference by adding a type assertion in either location:

// Change 1:  means “I intend for req.method to always have the literal type "GET”, preventing the possible assignment of "GUESS" to that field after
const req1 = { url: "https://example.com", method: "GET" as "GET" };
// change 2:  “I know for other reasons that req.method has the value "GET
handleRequest(req.url, req.method as "GET");

// You can use as const to convert the entire object to be type literals:
const req2 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req2.method);
// The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.

// Non-null Assertion Operator (Postfix !):Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

// symbol = a unique value often used as an object property key, its primitive data type in ts
const firstName = Symbol("name") ;
const secondName = Symbol("name");
// if (firstName === secondName) {
// //This comparison appears to be unintentional because the types 'typeof firstName' and 'typeof secondName' have no overlap.
// Can't ever happen
// }
