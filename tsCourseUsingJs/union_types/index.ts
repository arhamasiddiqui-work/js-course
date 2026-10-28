// e.g: union types : union types allow a value to be one of many types
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number' as its an object

// e.g:
function printIdUpperCase(id: number | string) {
//   console.log(id.toUpperCase());
  // Property 'toUpperCase' does not exist on type 'string | number'.
  //  Property 'toUpperCase' does not exist on type 'number'.
}

// e.g:
function printUnionType(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// e.g:
// Return type is inferred(figure out automatically) as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}