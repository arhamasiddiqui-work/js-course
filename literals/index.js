// Literals: These are fixed values—not variables—that you literally provide in your script.
// Array literals:
const coffees = ["French Roast", "Colombian", "Kona"];
const myList = ["home", /* empty */, "school", /* empty */, ];

// Object literals:
const sales = "Toyota";
function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}
const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };
console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

// template literals
const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];
const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;
// print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
