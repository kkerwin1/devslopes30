let numberList = [20, 20, 50]

/**
 * Get the difference between a given number and 27. If the number is >27, return double the absolute difference.
 * @param {Array} array - Array to loop through.
 * @param {*} comparisonNumber - Number to find the difference between. Will be 27 in this example.
 */
function getDifference(array, comparisonNumber) {
    console.log("getDifference()");
    for (number of array) {
        let difference = number - comparisonNumber;
        if (number > comparisonNumber) {difference = difference * 2};
        console.log(`${number}: ${difference}`);
    }
}

/**
 * Compute the sum of two given integers. If the two values are the same, triple their sum.
 * @param {Array} array - Array to loop through.
 */
function getSum(array) {
    console.log("");
    console.log("getSum()");
    for (index in array) {
        let nextIndex = 0;
        if (index === array.length-1) {nextIndex = 0} else {nextIndex++};
        let number = array[index];
        let nextNumber = array[nextIndex];
        let sum = number + nextNumber;
        if (number === nextNumber) {
            sum = sum * 3;
            console.log(`(${number} + ${nextNumber}) * 3 = ${sum}`);
        } else { console.log(`${number} + ${nextNumber} = ${sum}`) }
    }
}

/**
 * Check two given numbers and return true if one of the numbers is 40 OR if their sum is 40; else return false.
 * @param {Array} array - Array to loop through.
 */
function isForty(array) {
    console.log("");
    console.log("isForty()");
    for (index in array) {
        let nextIndex = 0;
        if (index === array.length-1) {nextIndex = 0} else {nextIndex++};
        let number = array[index];
        let nextNumber = array[nextIndex];
        let sum = number + nextNumber;
        let result = false;
        if (number === 40 || nextNumber === 40 || sum === 40) {result = true} else {result = false};
        console.log(`${number}, ${nextNumber}, ${sum}: ${result}`)
    }
}

getDifference(numberList, 27);
getSum(numberList);
isForty(numberList);