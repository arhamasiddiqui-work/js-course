// set: binds an object property to a function to be called when there is an attempt to set that propert
// syntax:
// { set prop(val) { /* … */ } }
// { set [expression](val) { /* … */ } }

// e.g:
const language = {
  set current(val) {
    this.log.push(val);
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.log);
// Expected output: Array ["EN", "FA"]

// removing a setter with del operator:
// delete language.current;

// Using setters in classes using private proper (#)
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

instance.msg = "cake";
console.log(instance.msg); // "hello cake"

// Using a computed property name:  A value calculated from other values / expressions rather than stored directly

const expr = "food";
const compProp = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};
console.log(compProp.baz); //bar

compProp.food = "baz"; //run the setter
console.log(compProp.baz); //baz
