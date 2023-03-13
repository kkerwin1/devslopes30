var numbers = [-1, -2, 20, 60, 77];

// Using the every() function, determine if each item in the array is
// greater than zero.

function isAboveZero(value) {
    return (value > 0);
}

console.log(numbers.every(isAboveZero));