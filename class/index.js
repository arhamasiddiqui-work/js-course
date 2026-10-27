//  class can be defined in two ways: a class expression or a class declaration,

// Declaration
class Rectangle1 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
const rectangle1 = new Rectangle1(10, 20);
console.log("height:", rectangle1.height, "width:", rectangle1.width); // 10 20
// Expression; the class is anonymous but assigned to a variable
const Rectangle2 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle3 = class RectangleClass {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Constructor: is a special method of a class for creating and initializing an object instance of that class, its not important for class to have a constructor, we use constructor when we want to set up an object with custom starting values or run setup code when it’s created.
// syntax:
// constructor() { /* … */ }

// e.g:
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}
const poly = new Polygon();
console.log(poly.name); // Expected output: "Polygon"

// if we dont provide a constructor then a default constructor will be supplied for us
class ValidationError extends Error {
  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }
}
try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}

// Getter and Method:
class usingGetter_Method {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}
const square = new usingGetter_Method(10, 10);
console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]

// Class Field declarations:
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Private elements:
class PrivElement {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
const privElement = new PrivElement(10, 10);
// console.log(privElement.#height);  -> error

// Inheritance: extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Lion extends Animal {
  speak() {
    super.speak(); // calling parent method
    console.log(`${this.name} roars.`);
  }
}
const l = new Lion("Fuzzy");
l.speak(); // Fuzzy makes a noise,  Fuzzy roars.


// e.g: EVALUATION ORDER
class Animal1 {}
// 1. extends — inherits from a parent class
class Dog extends Animal1 {}
// 2. constructor — initializes a new object
/*constructor(name) {
  this.name = name;
}*/

// 3. Property keys — evaluates property names
// ["name"];

// 4. Methods — defines methods and getters/setters
/*greet(){
  return "Hello";
}*/

// 5. Class initialization — JavaScript sets up the class
// class User {}

// 6. Field values — defines initial property values
class User {
  name = "Ali"; // Instance field: each object has its own value
  static role = "Admin"; // Static field: belongs to the class itself
}

// 7. Ready to use — create an object
const user = new User();
console.log(user.name, User.role);
