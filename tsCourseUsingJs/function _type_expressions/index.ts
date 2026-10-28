// Note that the parameter name is required. The function type (string) => void, means “a function with a parameter named string of type any“!
function greeter(fn: (a: string) => void) {
  fn("hello");
}
function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);

// by using type alias:
type GreetFunction=(a:string)=>void;
function greet(fn:GreetFunction){
  fn("hello");
}

//  call and construct signatures
type CallOrConstruct = {
  (n?: number): string;
  new (s: string): Date;  // Call Signatures 
}
function fn(ctor: CallOrConstruct) {
  // Passing an argument of type `number` to `ctor` matches it against
  // the first definition in the `CallOrConstruct` interface.
  console.log(ctor(10));            
// (parameter) ctor: CallOrConstruct
// (n?: number) => string

  // Similarly, passing an argument of type `string` to `ctor` matches it
  // against the second definition in the `CallOrConstruct` interface.
  console.log(new ctor("10"));               
// (parameter) ctor: CallOrConstruct
// new (s: string) => Date
}

fn(Date);

// constructor signature: can write a construct signature by adding the new keyword in front of a call signature
 type SomeObject {
  a: number;
  b: string;
}
type SomeConstructor = {
  new (s: string): SomeObject;
};
function example(ctor: SomeConstructor) {
  return new ctor("hello");
}

//  Call Signatures
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description"; 
doSomething(myFunc);

// generic functions
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// e.g:  standalone version of map would look like this:
function map<Input,Output>(arr:Input[], func:(arg:Input)=>Output): Output[]{
    return arr.map(func)
}
const parsed=map(["1","2","3"], (n)=>parseInt(n))

// Constraints: limit the kinds of types that a type parameter can accept.
function longest<Type extends{length:number}>(a:Type, b:Type){
    if (a.length >=b.length){
        return a
    }
    else{
        return b
    }
}
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");

// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);
// Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.

// writing constraints in good way:
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
 
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

// optional param:
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // I don't feel like providing the index today
    callback(arr[i]);
  }
}
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
// 'i' is possibly 'undefined'.
});

//  unknown
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  // a.b();
// 'a' is of type 'unknown'.
}

// rest arg type
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]  
const mul = multiply(10, 1, 2, 3, 4);  // the first val is 10 will be multiplied by 1,2,3,4

//param destructuring and type annotation:
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
// param destructuring and type alias:
type ABC={a:number,b:number,c:number};
function sum1({ a, b, c }: ABC) {
  console.log(a + b + c);
}

// the following implementations of the type () => void are valid:
type voidFunc = () => void;
const fn1: voidFunc = () => {
  return true;
};
const fn2: voidFunc = () => true;
const fn3: voidFunc = function () {
  return true;
};


// readonly
// Properties can also be marked as readonly for TypeScript. While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking.
type SomeType ={
  readonly prop: string;
}
function readOnlyProp(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
  // But we can't re-assign it.
  // obj.prop = "hello";
// Cannot assign to 'prop' because it is a read-only property.
}

// index signature:
function getStringArray() {
  return ["a", "b", "c"];
}
interface StringArray {
  [index: number]: string;  // index signature
}
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];         // const secondItem: string

// extending an interface
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// normal class:
class GoodGreeter {
  name: string;
 
  constructor() {
    this.name = "hello";
  }
}
const cl=new GoodGreeter();
cl.name="hello";

// Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:
class Base {
  k = 4;
}
class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    // console.log(this.k);
// 'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
    // console.log(this.k);
  }
}