// Create a function that takes an array of two numbers as a parameter and returns
// the sum of those two numbers and all of the numbers in-between.

/**
 * Return an array of all integers between two provided integers.
 * @param {Number} first - First number bound of the range.
 * @param {Number} second - Second number bound of the range.
 * @returns {Array} range - Array of integers between the two provided integers.
 */
function findRange(first, second) {
    let range = []
    if (first > second) {
        for (let i=second; i<=first; i++) {range.push(i)};
    } else if (second > first) {
        for (let i=first; i<=second; i++) {range.push(i)};
    } else {range.push(first)};
    return range;
}

randomInt = () => Math.floor(Math.random() * 11);

/**
 * Find the sum of all integers between the two integers in the provided array.
 * @param {Array} array - Array of two integers.
 * @returns {Number} sum - The sum of all integers between the two integers specified in array.
 */
function sumRange(array) {
    firstNumber = array[0];
    secondNumber = array[1];
    range = findRange(firstNumber, secondNumber);

    sum = range.reduce((accumulator, currentValue) => {return accumulator + currentValue});
    return sum;
}

first = [randomInt(), randomInt()];
second = [randomInt(), randomInt()];
third = [randomInt(), randomInt()];

console.log(`${first}: ${sumRange(first)}`);
console.log(`${second}: ${sumRange(second)}`);
console.log(`${third}: ${sumRange(third)}`);