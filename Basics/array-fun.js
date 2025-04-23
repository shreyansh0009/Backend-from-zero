// for backend development, array functions are very crucial, they help us to manipulate data. 

// 1. forEach(): it traverse through each element of an array and executes a function for each element.

let arr = [1, 2, 3, 4, 5];

arr.forEach(function(val) {
    val = val * 5;
    console.log(val);
})

console.log(arr); // [1, 2, 3, 4, 5] - original array is not modified

// 2. map(): it creates a new array by applying a function to each element of the original array. It does not modify the original array.

let arr2 = [1, 2, 3, 4, 5];

let newArr = arr2.map(function(val) {
    val = val * 2;
    if (val > 5) {
        return true;
    } else {
        return false;
    }
})
console.log(newArr); // [false, false, true, true, true] - new array is created
console.log(arr2); // [1, 2, 3, 4, 5] - original array is not modified

// 3. filter(): it creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.

let arr3 = [1, 2, 3, 4, 5];
let ans = arr3.filter(function(val) {
    return val > 2;
})
console.log(ans); // [3, 4, 5] - new array is created

// 4. find(): it returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned. It does not modify the original array.

let arr4 = [1, 2, 3, 4, 5];
let ans2 = arr4.find(function(val) {
    return val > 2;
})
console.log(ans2); // 3 - first element that satisfies the condition

// 5. indexOf(): it returns the index of the first occurrence of a specified value in an array, or -1 if it is not present. It does not modify the original array.

let arr5 = [1, 2, 3, 4, 5];
let ans3 = arr5.indexOf(3);
console.log(ans3); // 2 - index of the first occurrence of 3

