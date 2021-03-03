// Basic exercise 2

console.log("Hi, my name is Oyuka");

// Basic excercise 3

let text = 'and I am ' + 25 + ' years old';

// Basic exercise 4

console.log(text);
let players = ["Martin","Peter","Mathias","Niki"];
let text2 = "The most valuable player of the match is "
console.log(text2 + players[2]);

// Intermediate Exercise 1

let cars = ["Tesla","Audi","Renault","Volvo","Mazda","Fiat","Ferrari"];
console.log(cars);
cars.sort();
console.log(cars);

// Intermediate Exercise 2

var fruits = ["apple","banana","kiwi"];
console.log(fruits);
fruits.splice(3,0,"orange");
console.log(fruits);
fruits.splice(3,1);
console.log(fruits);

var animals =["monkey","horse","dog"];
console.log(animals);
animals.sort();
console.log(animals);
animals.splice(0,0, "cat");
console.log(animals);

// Intermediate Exercise 3

var fruits2 =["mango","cherries","kiwi","grapes","pear","peach","orange","lemon"];
console.log(fruits2);
fruits2.forEach(element=>console.log(element));

//Advanced Exercise 1
// Sum

let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;
j = parseInt(c)+parseInt(d)+a+b+e;
console.log(j);

//multiplication

var f = "1";
var g = 15;
var h = 8;
var i = "1";
k = parseInt(f)*parseInt(i)*g*h;
console.log(k);

// division

console.log(j/k);

// Advanced Exercise 2

let multiDim = 
[[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27],
[7, 4, 28, 14],
[3, 10, 25, 7],
[21, 4, 6, 17],
[3, 5, 26, 3]];

console.log
(multiDim[1][1],multiDim[4][2],multiDim[5][3],multiDim[2][3],multiDim[2][1]);

// Challenge 1: Multidimensional array

let vienna = [
["vienna", 2, 1, 24],
[8, "is", 9, 4],
[7, 0, "a nice", 27],
[3, 5, 26, "city"]];

console.log
(vienna[0][0],vienna[1][1],
vienna[2][2],vienna[3][3]);

// Challenge 2: String Manipulation

let dollar = 
"Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up.";
console.log(dollar);

let dollars = dollar.split("$").join(" ");
console.log(dollars);



