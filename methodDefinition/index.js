// Method definition: is a shorter syntax for defining a function property in an object initializer

// e.g:
const methodExample = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};

// e.g:
const obj = {
  a: "food",
  b() {
    return this.a;
  },
};
console.log(obj.b()); // "food"

// Method definitions in classes
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
  secondPublicMethod() {
    return "goodbye world";
  }
} //instance-> object created from the class
const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod()); // "hello world"

// Inside instance methods, this and super work like in normal methods. Usually, this refers to the instance itself. In subclasses, super lets you access the prototype of the object that the method is attached to, allowing you to call methods from the superclass
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}
class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}
const instance2 = new SubClass();
console.log(instance2.subPublicMethod()); // "hello world"

// Async methods
// Using a named property
const obj1 = {
  f: async function () {
    await somePromise;
  },
};

// The same object using shorthand syntax
const obj2 = {
  async f() {
    await somePromise;
  },
};
// Async generator methods: marks a function that can pause and resume using yield,  asterisk (*) in the generator method syntax must be before the generator property name. (That is, * f(){} will work, but f *(){} will not)
const AsyncGenMethod = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// The same object using shorthand syntax
const SameObj = {
  async *f() {
    yield 1;
    yield 2;
    yield 3;
  },
};
console.log(AsyncGenMethod.f(), SameObj.f());
