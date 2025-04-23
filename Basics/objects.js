// Objects in JavaScript
var obj = {
    name: "John",
    age: 30,
}

console.log(obj.name); // John
console.log(obj.age); // 30

obj.name = "Doe"; // updating the value of name property

console.log(obj.name); // Doe

// how to avoid modifying the original object?

obj.freeze(obj); // freezing the object, now we cannot modify the object

obj.age = 25; // trying to modify the age property
console.log(obj.age); // 30 - original object is not modified

// Therefor everything in javascript is an object, even functions are objects

// We can find length of array, but do you know we can also find length of functions

function add(a, b) {

}
console.log(add.length); // 2 - length of function is number of arguments it takes