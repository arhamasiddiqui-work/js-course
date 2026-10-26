// Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false
// syntax:
if (condition) {
  statement1;
} else {
  statement2;
}
// e.g:
const age = 14;
if (age < 18) {
  console.log("Sorry, You are not eligible to vote");
} else {
  console.log("You are eligible to vote");
}

// A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement.
// syntax:
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
// e.g:
switch ((color = "red")) {
  case "red":
    console.log("The color is red.");
    break;
  case "blue":
    console.log("The color is blue");
    break;
  default:
    console.log(`Sorry, I don't know the ${color}.`);
}
console.log("Is there anything else you'd like?");
