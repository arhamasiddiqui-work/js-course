// Variables: Symbolic names for values in an application, The names of variables called identifiers follow specific naming rules

const name = "JS";
console.log(name);

// const y=new String('yellow')


// Declaration and initialization
 /*a statement like let x = 42, the let x part is called a declaration, and the = 42 part is called an initializer, whereas const declarations always need an initializer*/
let x = 42;
let xy;  // undefined
console.log(x,xy)

const a=1;
// const ab;         -> error
console.log(a) //ab)


// Data type conversion
let answer = 42;  // later assigning it to:
answer = "Thanks for all the fish!";

// Converting strings to numbers: 3 methods: parseInt(string, radix), parseFloat(), Number() 
parseInt("101", 2); // 5 , Converts the binary string "101" (base 2-> radix: the number of unique digits it uses) into the decimal integer 5
parseFloat("3.14"); // 3.14, 
const e = new Number("123"); // a === 123 is false
const b = Number("123"); // b === 123 is true
// object checking;
e instanceof Number; // is true
b instanceof Number; // is false
typeof e; // "object"
typeof b; // "number"



/* Escape Sequences:
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Tab
\v	Vertical tab
\'	Apostrophe or single quote
\"	Double quote
\\	Backslash character 
*/


