/**
 * Return the sum of all odd Fibonacci numbers up to a specified Number, "num".
 * @param {Number} num - Numerical limit to perform the operation up to.
 * @returns 
 */
function oddFibonacciSum(num) {
    let oldNumber = 1;
    let newNumber = 1;
    let oddSequence = [oldNumber, newNumber];

    while (newNumber <= num) {
        let sum = oldNumber + newNumber;
        [oldNumber, newNumber] = [newNumber, sum];
        if (newNumber % 2 === 1 && newNumber <= num) {oddSequence.push(newNumber)};
    }

    return oddSequence.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(oddFibonacciSum(10));