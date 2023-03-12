/**
 * Given an integer, find the factorial.
 * @param {Number} integer - number to perform factorial upon
 * @returns {Number} result - factorialized number
 */
function findFactorial(integer) {
    let result = 1;
    for (let i=1; i<=integer; i++) {
        result = result * i;
    }
    return result;
}

console.log("6: " + findFactorial(6));
console.log("16: " + findFactorial(16));
console.log("8: " + findFactorial(8));
console.log("49: " + findFactorial(49));
console.log("101: " + findFactorial(101));