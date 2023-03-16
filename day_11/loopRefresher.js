let numberArray = [];

// Populate numberArray.
for (i=2; i<=100; i++) {numberArray.push(i)};

/**
 * Evaluate whether an integer is even. If it is even, add it to the provided array. Return the provided array.
 * @param {Number} number - An integer to evaluate whether it is even.
 * @param {Array} array - A list of integers to add the new integer to if it is even.
 * @returns {Array} array - Return the provided array, now including the provided number if it is even.
 */
function isEven(number, array) {
    if (number % 2 === 0) {
        array.push(number);
    }
    return array;
}

/**
 * Given an array of integers, print only the even integers.
 * @param {Array} array - An array of integers.
 */
function numbers(array) {
    let evenNumbers = [];
    for (number of array) {evenNumbers = isEven(number, evenNumbers)};
    console.log(evenNumbers);
}

/**
 * Improved version of the numbers() function that completes the process in half the iterations.
 * @param {Array} array - An array of integers.
 */
function enhancedNumbers(array) {
    let evenNumbers = [];
    for (index in array) {
        let number = array[index];
        evenNumbers = isEven(number, evenNumbers);
        if (index !== array.length-1) {
            let nextIndex = index++;
            let nextNumber = array[nextIndex];
            if (!evenNumbers.includes(nextNumber)) {
                evenNumbers = isEven(nextNumber, evenNumbers);
            }
        }
    }
    console.log(evenNumbers);
}

numbers(numberArray);
enhancedNumbers(numberArray);