/*
 * Build a function that can take any number as a parameter and then return the sum of
 * all of all the digits within that number. Do not use any type of String to solve
 * this problem.
 * 
 * Later clarification indicated that only integers, and not floats, need to be
 * considered.
 */


/**
 * Find the sum of all of the digits of a number.
 * @param {Number} number - Number to find the sum of.
 * @returns {Number} digitsSum - The sum of all of the digits of a number.
 */
function sumDigits(number) {
    let originalNumber = number
    let digits = [];

    // Maximum length = Number.MAX_SAFE_INTEGER (16 digits).
    for (let i=16; i>=0; i--) {
        let digit = Math.floor(number / Math.pow(10, i));
        digits.push(digit);
        if (digit !== 0) {
            number = number - (digit * Math.pow(10, i));
        }
    }

    let digitsSum = digits.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(`${originalNumber}: ${digitsSum}`);
}

sumDigits(Number.MAX_SAFE_INTEGER);
sumDigits(515);
