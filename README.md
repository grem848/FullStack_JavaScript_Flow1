# Assignment 1, FullStack JavaScript
## Period-1 Vanilla JavaScript, es2015/15.., Node.js, Babel + Webpack and TypeScript

# Explain and Reflect
>## Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

### Code examples of Java & JavaScript

In Java we have static type checking, so the programmer must specify the type (integer, double, string, etc.)

In JavaScript we have dynamic tpye checking, so the programmer doesn't have to specify the type of a created variable


```javascript
Java:
String s = "Hello World!";
int i = 1;

JavaScript:
var s = "Hello World!";
var i = 1;
```

In Java we can have variables that points to an object.

In JavaScript we can have variables that points to a function
```javascript
Java:
ObjectA a1 = new ObjectA();

JavaScript:
var f1 = function(){...}
```
In Java we can pass objects as parameters.      

In JavaScript we can pass functions as parameters
```javascript
Java:
someFunction(a1);   

JavaScript:
someFunction(f1)
```


### Pros & similarities:
- **Object-Oriented Programming (OOP).** 
Both languages require the developer to code in terms of objects and their relationships to one another. By extension this gives both languages access to techniques like inheritance, encapsulation, and polymorphism.
 
- **Front-End Development.** 
Both languages can be used in aspects of front-end development. JavaScript can be embedded directly into HTML, implemented as a framework or library; Java can be used as a Java applet.
 
- **Back-End Development.** 
Both languages can be used on the server-side. Java has long been used to power back-end technologies like Apache, JBoss, and WebSphere. Node.js has become a launch pad for JavaScript-powered servers.
 
### Cons & differences:
- **Compiled vs. Interpreted.** 
Java is considered a compiled programming language. JavaScript is considered an interpreted scripting language. The difference is in the implementation: Java is compiled into bytecode and run on a virtual machine, whereas JavaScript can be interpreted directly by a browser in the syntax it is written (although it is usually minified in practice).
 
- **Static vs Dynamic Type Checking.** 
Java uses static type checking, where the type of a variable is checked at compile-time. The programmer must specify the type (integer, double, string, etc.) of any variable they create. JavaScript, like most scripting languages, uses dynamic typing, where type safety is verified at runtime. It is not required for a programmer to specify the type of any variable they create. There are many pros and cons for these two paradigms, but the primary advantage of static type checking is that type errors are caught early in development, and because the compiler knows exactly what data types are being used, code typically executes faster or uses less memory. The primary advantage of dynamic type checking is programmer productivity—you are free to assign types at your leisure.
 
- **Concurrency.** 
The ability to handle the execution of several instruction sequences at the same time is handled very differently between Java and JavaScript. Java makes use of multiple threads to perform tasks in parallel. JavaScript, particularly as it exists as Node.js in server-side applications, handles concurrency on one main thread of execution via a queue system called the event loop, and a forking system called Node Clustering. For most use-cases, both methods work just fine, but Java is generally faster because thread to thread memory sharing is much faster than interprocess communication (IPC).
 
- **Class Based vs Prototype Based.** 
Java follows class based inheritance—a top down, hierarchical, class-based relationship whereby properties are defined in a class and inherited by an instance of that class (one of its members). In JavaScript, inheritance is prototypal—all objects can inherit directly from other objects. Hierarchy is accomplished in JavaScript by assigning an object as a prototype with a constructor function.
 

### **You should consider Java if your project involves…**
- Android Apps
- Enterprise Software
- Scientific Computing
- Big Data Analytics
- General Purpose Programming of Hardware
- Server-Side Technologies like Apache, JBoss, Geronimo, GlassFish, etc.
 
### **You should consider JavaScript if your project involves…**
- Dynamic single page applications (SPAs)
- Front-End technologies like jQuery, AngularJS, Backbone.js, Ember.js, ReactJS etc.
- Server-Side technologies like Node.js, MongoDB, Express.js, etc.
- Mobile App Development through PhoneGap, React Native, etc.


>## Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers

### JavaScript: ES6(es2015) + ES7:
- The natural evolution of JavaScript, bringing features like arrow functions, Classes and Inheritance, promises, Generators and much more.
- Can be used in "all" browsers using a polyfil or a transpiler

- Can be used with NodeJS (almost) out of the box with LTS v6.x(Long Term Support stream), otherwise via a transpiler (Babel)

Babel is a essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.

- Available out of the box with newer versions of ReactJS

### Typescript:
- A free open source language, developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and many of the features from es2015 and es2016

- Can (obviously) be used in all browsers when compiled into ES5

- Can be used with NodeJS with a typescript compiler, which would be node.js or git.

- Adds the immediate compiling (like Java) to JavaScript

>## Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.

Node.js is an event based, asynchronous I/O server side platform that runs on Google's V8 JavaScript Engine for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
#### What it's NOT
- Node.js is not a JavaScript framework.
- Node.js' V8 wrappers are not made in JavaScript but C.
- Node.js is not multi-threaded. It runs in a single thread with callback concept.

#### What it IS:
- Node.js is a server side platform which can execute JavaScript.
- Node.js is an open source platform to make real time network applications
- Node.js provides asynchronous, event driven I/O APIs.
- Node.js runs a single threaded event based loop, so all executions become non-blocking.

### Pros & Cons
#### Pros:
- Asynchronous event driven I/O helps concurrent request handling.
- Provides the possibility to use the same language on both the server and client side.
- Allows you to use NPM - the Node Package Manager.
- Has an activate and vibrant community, with lots of free-to-use open source modules.

#### Cons:
- Dealing with relational databases are a pain.
- Nested callbacks can create confusion.
- Requires understanding of somewhat advanced JavaScript.
- Not suited for CPU-intensive tasks.

### NPM
NPM is a package manager for Node.js with hundreds of thousands of packages, which you can include in your Node.js based projects. Using NPM can really speed up the process when building applications in Node.js. NPM allows Node.js to be lightweight, because you only include the features that you need, thus avoiding a bloated server side platform.


>## Explain about the Event Loop in Node.js

### Call Stack:
Runs first, these are the executed calls from javascript.
 
### WebApi's:
These run and are send away to the browser and to different threads, they complete separately and then when they are finished the go to the task queue.
 
### Task Queue:
Holds the finished webapi processes then when the call stack is empty, it sends them to the call stack again.

### Video where the event loop is explained:

https://www.youtube.com/watch?v=8aGhZQkoFbQ

### Figure showing the event loop:

<img src="https://cdn-images-1.medium.com/max/1600/1*FA9NGxNB6-v1oI2qGEtlRQ.png" width="500">

>## Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

- Babel is essentially an ECMAScript 6 to ECMAScript 5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.
- Webpack is a bundler for modules. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
good Webpack notes<br />
- Bundles ES Modules, CommonJS and AMD modules (even combined).
- Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).
- Dependencies are resolved during compilation, reducing the runtime size.
- Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
- Highly modular plugin system to do whatever else your application requires.
- we bundle all files into one big file (or a couple files) in order to reduce the number of requests. 
Another common approach to speed up the bundling operation is to “minify” the bundled code. 
Minification is the process of removing unnecessary characters from source code (those only meant for humans).

### Examples
index.html<br />
show our html code with javascript support.
```
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>Getting Started with Webpack</title>
</head>
<body>
    <h1>WebPack is fun</h1>
    <div id="my-table"></div>
    <script src="bundle.js"></script>
</body>
</html>
```
main.js<br />
our javascript code.
```
require('./main.css');
const name = 'Scotch.io';
setTimeout(() => console.log(`Hello there from ${name}`), 300);
```
Webpack.config.js<br />
This file exports our project's webpack configuration object.
```
module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: "file-loader"
            }
        ],
    }
};
```
main.css<br />
this makes the title red.
```
h1 {
    color: red;
}
```

>## Explain the purpose of “use strict” and Linters, exemplified with ESLint

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
Strict mode helps out in a couple ways:
- It catches some common coding bloopers, throwing exceptions.
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
- It disables features that are confusing or poorly thought out.

#### Example 1
You can apply strict-mode to the entire file:
```javascript
"use strict";
x = 3.14;       // This will cause an error (x is not defined)
```

#### Example 2
You can use it in a specific function scope:
```javascript
// Non-strict code...
(function(){
  "use strict";
  x = 3.14;       // This will cause an error (x is not defined)
  // Strict code...
})();
// Non-strict code... 
```


# Explain using sufficient code examples the following features in JavaScript. 

>## Variable/function-Hoisting

At runtime the compiler will move variable declarations and function declarations to the top of the document.
#### Example 1:
The javascript engine will automatically hoist the function declaration to the top:
```javascript
foo(); // The function is called before it is declared
function foo() {} // This function is moved to the top of the document on runtime
```
This is what it is going to look like at runtime:
```javascript
function foo() {}
foo();
```

#### Example 2:
Only the declaration is hoisted, and not the assignment:
```javascript
foo();
var foo = function () {};
```
This is what it is going to look like at runtime:
```javascript
var foo;
foo();  // TypeError: undefined is not a function
foo = function () {};
```


>## `this` in JavaScript and how it differs from what we know from Java/.net.

A function's `this` keyword behaves a little differently in JavaScript compared to other languages.
In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.
#### Example 1 (Global Context):
In the global execution context (outside of any function), this refers to the global object, whether in strict mode or not.
```javascript
console.log(this.document === document); // true
// In web browsers, the window object is also the global object:
console.log(this === window); // true
this.a = 37;
console.log(window.a); // 37
```

#### Example 2 (Shadowing this):
```javascript
function Car(make,model) {
  this.make = make;
  this.model = model;
  this.show = function(){setTimeout(function(){ //This function gets it's own "this"
    console.log(this.make + ", " + this.model);
  },0)};
}
var car = new Car("Volvo","V70");
car.show(); //undefined, undefined
```

>## Function Closures and the JavaScript Module Pattern
When using function closures, the idea is often to make a function available inside a particular scope only.
#### Example (Closure):
Here we assign the value of `scope` to `"I am global"` in the global scope, and `"I am just a local"` in the scope of `getScope()`
```javascript
    var scope = "I am global";
    function getScope() {
        var scope = "I am just a local";
        return scope;
    }
    console.log(getScope());
    console.log(scope);
```

#### Example (JavaScript Module Pattern):
Here we create a module that can return a greet to a certain person with the `greet()` function, by passing in the name:
```javascript
    function greeter(name) {
        var name = name;
        return {
            greet: function() {
                return "Hi " + name;
            }
        }
    }
    console.log(greeter("Emil").greet());
```


>## Immediately-Invoked Function Expressions (IIFE)

An immediately invoked function is a function that is called immediately after it is declared.
#### Example 1:
WordPress disables the use of `$` for sequrity reasons when working with jQuery.:
```javascript
(function($) {
  $(document).ready(function() { });
  
})(jQuery);
```

A common way to implement IIFE's is to enclose both the function expression and invocation in parentheses.

it also protects against polluting the global environment.
```javascript
(function(){
  var txt = "Hello World";
  console.log(txt);  //OK
})();
console.log(txt);  //Throws an error
```
You can also use it as a shorter way of writing consolidated code, and immediately executing it.


>## JavaScripts Prototype

Every JavaScript object has a prototype. The prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.
#### Example (Creating a prototype):
```javascript
  function Person(firstName, lastName, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  
  var person1 = new Person("Luke", "Skywalker", 26);
  var person2 = new Person("Darth", "Vader", 48);
  var person3 = new Person("Master", "Yoda", 900);
```


>## User-defined Callback Functions (writing your own functions that take a callback)

In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves. They can be stored in variables, passed as arguments to functions, created within functions, and returned from functions.
#### Example 1 (Filter):
Creates a new array including elements where the callback function returns a number and omits the ones where it returns false.
```javascript
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // This will produce an array with [5,6,7,8,9]
  var filtered = numbers.filter(function (number) {
      if (number > 4)
        return number;
  });
```

#### Example 2 (Map):
Creates a new array with the values modified by the callback function
```javascript
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // This will produce an array with [1,2,3,4,5,6,7,8,9,10]
  var filtered = numbers.map(function (number) {
      return number++;
  });
```

#### Example 3 (Custom function):
```javascript
  var names = ["Luke Skywalker", "Darth Vader", "Obi-Wan"];
  
  function sayHi(name) {
    console.log('Hi ' + name);
  }
  
  (function(arr) {
    arr.forEach(function(name) {
      sayHi(name);
    });
  })(names);
```

>## Explain the methods *map, filter and reduce*

* **Array.map**

    ```js
    let numbers = [2, 3, 4, 5]
    console.log(numbers.map((e) => e * 2));
    ```

    output
    ```js
    4
    6
    8
    10
    ```

* **Array.filter**

    ```js
    const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']
    const filteredNames = names.filter(name => name.length <= 3)
    console.log(filteredNames)
    ```

    output
    ```js
    Jan
    Bo
    ```

* **Array.reduce**

    ```js
    let numbers = [2, 3, 4, 5]
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(numbers.reduce(reducer));
    ```

    output
    ```js
    14
    ```

>## Provide examples of user-defined reusable modules implemented in Node.js

person.js
This creates a reusable module for a person.
```javascript
    function Person(name, age) {
        var name = name;
        var age = age;
        return {
            setName: function(value) {
                name = value;
            },
            setAge: function(value) {
                age = value;
            },
            getInfo: function() {
                return {
                    name: name,
                    age: age
                }
            }
        };
    }
    module.exports = Person;
```
Here you use the reusable module in main.js
```javascript
    var Person = require('person.js');
    var person1 = Person("Luke Skywalker", 26);
    console.log(person1.getInfo);
```



# ES6,7,8... and TypeScript

>## Provide examples and explain the es2015 features: *let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.*

### Let
- let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
- Variables declared by let have as their scope the block in which they are defined, as well as in any contained sub-blocks . In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function.<br /><br />
Example on let compared to var:
```
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```
### Arrow functions
- An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. Arrow functions are always anonymous. These function expressions are best suited for non-method functions, and they cannot be used as constructors.<br /><br />
Example on an arrow function being able to shorten the function, which is very handy:
```
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
var materialsLength1 = materials.map(function(material) { 
  return material.length;
});
var materialsLength2 = materials.map((material) => {
  return material.length;
});
var materialsLength3 = materials.map(material => material.length);
```
### This
- In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind method to set the value of a function's this regardless of how it's called, and ES6 introduced arrow functions whose this is lexically scoped (it is set to the this value of the enclosing execution context).<br />
- In the global execution context (outside of any function), this refers to the global object, whether in strict mode or not.<br />

Global execution example:
```
console.log(this.document === document); // true
// In web browsers, the window object is also the global object:
console.log(this === window); // true
this.a = 37;
console.log(window.a); // 37
```

- in a function context, the value of this depends on how the function is called.<br />

Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object:
```
function f1() {
  return this;
}
// In a browser:
f1() === window; // the window is the global object in browsers
// In Node:
f1() === global;
```
In strict mode, however, the value of this remains at whatever it was set to when entering the execution context, so, in the following case, this will default to undefined:
```
function f2() {
  'use strict'; // see strict mode
  return this;
}
f2() === undefined;
```
So, in strict mode, if this was not defined by the execution context, it remains undefined.

### Rest parameters
- The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
- If the last named argument of a function is prefixed with ..., it becomes an array whose elements from 0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.<br />

Example:
```
// Before rest parameters, the following could be found:
function f(a, b) {
  var args = Array.prototype.slice.call(arguments, f.length);
  // …
}
// to be equivalent of
function f(a, b, ...args) {
  
}
```
Simply sets the argument array at the end.

### Destructuring assignment
- The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.<br />

Example, destructuring of data from a list:
```
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```
Example, destructuring of data from an array:
```
var foo = ['one', 'two', 'three'];
var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

### Map
- The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.
- A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
- It should be noted that a Map that is a map of an object, especially a dictionary of dictionaries, will only map to the object's insertion order -- which is random and not ordered.<br />

Example, using the map object:
```
var myMap = new Map();
var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};
// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');
myMap.size; // 3
// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"
myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}
```


>## Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

- Javascript did not use to have built-in modules but the javascript community came up with work-arounds which made it possible to get modules.
- two of these work-around standards are commonJS modules with node.js modules as implementation and Asynchronous Module Definition (AMD) with requireJS as implementation. 
- commonJS(Node.js) makes it possible to compact syntax, it is designed for synchronous loading and where it's main use is on the server.
- Asynchronous Module Definition(requireJS) makes a slightly more complicated syntax, enabling AMD to work without eval() (or a compilation step), it's designed for asynchronous loading and it's main use are in the browsers.
- ES6 uses both commonjs and AMD<br />
Es2015 module import and export example:<br />
Export.
```
//------ lib.js ------
    export const sqrt = Math.sqrt;
    export function square(x) {
        return x * x;
    }
    export function diag(x, y) {
        return sqrt(square(x) + square(y));
    }
```
Import.
```
//------ main.js ------
    import { square, diag } from 'lib';
    console.log(square(11)); // 121
    console.log(diag(4, 3)); // 5
```


>## Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

- OO keywords is probably the most awaited features in ES6. Classes are something like another syntactic sugar over the prototype-based OO pattern. We now have one, concise way to make class patterns easier to use.<br/>
ES6 inheritance example:<br />
Class definition.
```
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}
```
Class inheritance.
```
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}
```
Here is a clear example on how to inherit from another class.<br />
In my opinion it looks really similar to how you inherit in java, aka. the extends parents class.<br />


>## Provide examples with es-next, running in a browser, using Babel and Webpack



>## Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

### Class:

```
class Shape {
```

### Types

```
color: string;
area: number;
```

### Interface

```
interface IBook {
    title: string;
    readonly author: string;
    published?: string;
    pages?: number;
}
```

>## Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)

# Callbacks, Promises and async/await
## Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:

Link to Promises explaination on Youtube
https://www.youtube.com/watch?v=PoRJizFvM7s

>## Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")

## Examples of the Pyramid of Doom
Avoiding the callback hell/pyramid of doom, is by using Promises or async await.
```
async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
                async5(function(){
                ....
            });
        });
    });
});
```

<img src="https://cdn-images-1.medium.com/max/1600/1*mL04Mh-tDosU6_OlqexwyQ.jpeg" width="500">

## Example of how to fix/prevent the callback hell/pyramid of hell
```
async1
  then(async2).
  then(async3).
  then(async4).
  then(async5).
  catch(errorHandlingForAll);
});
```

>## Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

## [Serial & Parallel Example](https://github.com/grem848/FullStack_JavaScript_Flow1/blob/master/week2-promises/promisedemoclass/parSer.js)


## [Serial Example](https://github.com/grem848/FullStack_JavaScript_Flow1/blob/master/week2-promises/promiseexercise/exercise2.js)


>## Example(s) that demonstrate how to implement our own promise-solutions.

## [Custom promise Example](https://github.com/grem848/FullStack_JavaScript_Flow1/blob/master/week2-promises/promisedemoclass/myPromise.js)


## [Other examples of own promises](https://github.com/grem848/FullStack_JavaScript_Flow1/blob/master/week2-promises/promisedemoyoutube/promises.js)

>## Example(s) that demonstrate error handling with promises

## [Shows the use of catch](https://github.com/grem848/FullStack_JavaScript_Flow1/blob/master/week2-promises/promisedemoclass/promisePar.js)

### Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.

### Provide examples to demonstrate 
- Why this often is the preferred way of handling promises
- Error handling with async/await
- Serial or parallel execution with async/await.



