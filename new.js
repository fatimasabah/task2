// this function sorting arrays
function bubble(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// We can make the array in a variable and then print it....

// print the array numbers in the file ..using function

console.log(bubble([
    10, 10, 31, 19, 18, 21, 55, 23, 20, 10, 10, 78, 80, 99, 15
]));

// print the origin matrix numbers using function
console.log(bubble([
    5, 8, 0, 1, 9, 11, 15, 16
]))

// *****************************
// If we make it a variable, it must be converted from mutable to immutable by const
// *****************************88


// After a continuous search, I came to the result of the file, but it was not enough time to make it in the right way
var fs = require("fs");
var text = fs.readFileSync("data.txt");
var textByLine = text.split(",")