// get: binds an object property to a function that will be called when that property is looked up, it must have exactly zero param
// syntax:
// { get prop() { /* … */ } }
// { get [expression]() { /* … */ } }

// e.g:
const example = {
  get prop() {
    // getter, the code executed when reading obj.prop
    return someValue;
  },
};
// e.g: Defining a getter on new objects in object initializers
const obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
};
console.log(obj.latest);

// Deleting a getter using the delete operator
delete obj.latest;

// Using getters in classes using private proper (#): msg is a public property that triggers the getter/setter, while #msg is a private field that stores the actual value without triggering them
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}
const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"
instance.msg = "Random";
console.log(instance.msg); // "hello Random"

// using a computed property name:
const expr = "food";
const compProp = {
  get [expr]() {
    return "restaurant";
  },
};
console.log(compProp.food);  // restaurant

// using static getters
class MyConstants {
  static get foo() {
    return "foo";
  }
}
console.log(MyConstants.foo); // 'foo'
MyConstants.foo = "bar";
console.log(MyConstants.foo); // 'foo', a static getter's value cannot be changed

