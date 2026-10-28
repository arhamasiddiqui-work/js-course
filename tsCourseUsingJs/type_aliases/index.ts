// Type Aliases:a name for any type, similar as pydantic model schema in python but kinda diff in some places, similar as
type User = {
  name: string;
  age: number;
};
function printUser(user: User) {
  console.log(user.name, user.age);
}
printUser({ name: "John", age: 22 });

// Interface Type
// Extending an interface
// e.g A:
interface Animal1 {
  name: string;
}
interface Bear1 extends Animal1 {
  honey: boolean;
}
function getBear1(): Bear1 {
  return { name: "Bear", honey: true };
}
const bear1 = getBear1();
bear1.name;
bear1.honey;

// Extending a type via intersections
type Animal2 = {
  name: string;
};
type Bear2 = Animal2 & {
  honey: boolean;
};
function getBear2(): Bear2 {
  return { name: "Bear", honey: true };
}
const bear2 = getBear2();
bear1.name;
bear1.honey;

// e.g: using type alias and union
type ID = string | number;
let userId: ID = 20;      // ✅
let anotherId: ID = "20"; // ✅