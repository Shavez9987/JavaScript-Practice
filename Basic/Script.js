
console.log("idrisi");

// Decleration of Variables 

let a = "shavez";
console.log(a);

let b = 5;

let c = 8;


console.log(b+c);

let messagebox;

messagebox = "Alam";

console.log(messagebox);

messagebox = "idrisi";

console.log(messagebox);


const g = "08.05.2024";

console.log(g);

// Note:-
// var is function-scoped, not simply “global.”
// let is block-scoped, not simply “local.”


// Data Types in js

// number

let n =123;

console.log(n);

let nf = 45.555;
console.log(nf);

// bigint

let bigint = 123456789n;

console.log(bigint);

// String

let str1 = "hello";

let str2 = "world";

let phrase = `can embed another ${str1} ${str2}`;

console.log(phrase)


// Boolean

let isGreater = 4 < 1;

console.log(isGreater);

let Value = true;

console.log(Value);

// Null

let age = null;

console.log(age);

// undefined

let data;
console.log(data);

// Basic operators

// addition

let apples = "2";
let orrange = "3";

console.log(apples + orrange);
console.log(apples +" " + orrange);

// 1. arithematic operator

let a1 = 20;
let a2 = 30;

let a3 = a1 + a2;

console.log(a3);

// 2. Assignment operators 

a1 = 2;
a1 += 3;
console.log(a1);

let m = 2;

m += 2;

console.log(m);
m *= 2;
console.log(m);

let z = 2;

z += 5;

z *= 2;

console.log(z);

let x = 2;
x = -x;
console.log(x);  //unairy negation was applied


let h = 1, y = 3;
console.log( y -  h); 

// division

console.log(8 / 3); 

// The % operator is called the Modulus Operator (or remainder operator).

console.log(8 % 3); 

// exponentional 2² 
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16

console.log(3**3);

console.log(`${str1} alam ${str2}`);  // practice on concatination

// 4.increment and decement operator 
// ++x pre-increment ...increment x by 1 then return x 
// x++ post-increment ...return x than increment by 1
// --x pre-decrement ...decrement x by 1 then return x
// x-- post-decrement ...return x than decrement by 1

let f;
f = 10;
console.log(++f);  //11
console.log(f);     //11

let v;
v = 12;
console.log(v++);  //12
console.log(v);     //13

let e;
e = 10;
console.log(--e);  //9
console.log(e);     //9

let i;
i = 12;
console.log(i--); //12
console.log(i);  //11

// 5.logical operator
// && Logical AND: true if both the operands/boolean values are true, else evaluates to false
// || Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false
// ! Logical NOT: true if the operand is false and vice-versa.

// AND &&
const A = true, B=false;
const C =4;
console.log(A&&A);
console.log(A&&B);
console.log((C>2) && (C<2));

// OR ||  

console.log(A||A);
console.log(A||B);

console.log((C>2) || (C<2));

// ! Not 

console.log(!A);
console.log(!B);

// 6. comparison operator 

D = 5; //Assignment operator
D == "5";  // comapare only value (true)
D === "5"; // comapre value and data type  (false)

// 7.condition operator 

// let company = prompt("which company created javaScript?")
// if(company== "nestscape"){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// 7.condition operator in short

// company == 'nestscape' ? console.log("you are right") :  console.log("you are wrong");

// company == "nestscape" ? console.log("yes") : console.log("No");


// Array

const fruits = ["Banana", "Apple", "Orange", "Mango"];
    //  index     0          1        2         3 

    // length is 4

  // Properties of Array
// join()
// // The join() method also joins all array elements into a string.

fruits.join();
console.log(fruits);

// pop()
// // The pop() method removes the last element from an array:

console.log(fruits);

fruits.pop();
console.log(fruits);

// push()
// // The push() method adds a new element to an array (at the end):

console.log(fruits);

fruits.push("Alam");
console.log(fruits);



// shift()
// // The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(fruits);

fruits.shift("Shavez");
console.log(fruits);

// unshift()
// // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:


console.log(fruits);

fruits.unshift("ahmed");
console.log(fruits);


// splice()
// // The splice() method can be used to add new items to an array:


console.log(fruits);

fruits.unshift("Sailor");
console.log(fruits);


// concat()
// // The concat() method creates a new array by merging (concatenating) existing arrays:

console.log(fruits);

let arr = ["bombay", "Delhi"]; 

result = fruits.concat(arr);
console.log(result);

// slice()
// // The slice() method slices out a piece of an array into a new array.

console.log(result);

let arr2 = fruits.slice(2,5);

console.log(arr2);

// sort()

console.log(fruits.sort());

// reverse()

console.log(fruits.reverse());
