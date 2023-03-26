const firstNumber = 787;
const secondNumber = 998;

/**
 * Return a Number where 1 has been added to each digit in the digitArray.
 * @param {Array} digitArray - An array of digits, each of type Number.
 * @returns {Number} value - A number with 1 added to each digit in the supplied number.
 */
function addDigits(digitArray) {
    let reversedArray = digitArray.reverse();

    let value = 0;
    for (tensPlace in reversedArray) {
        let digit = reversedArray[tensPlace];
        value = value + ((digit + 1) * Math.pow(10, tensPlace));
    }

    return value;
}

/**
 * Split a multi-digit number into an array of digits using strings.
 * This function satisfies Part 1 of the Day 18 Mission.
 * @param {Number} number - Multi-digit number to split into an array of digits.
 * @returns {Array} digits - An array of digits, each of type Number.
 */
function string_digitSplit(number) {
    let numberString = number.toString();
    let stringDigits = numberString.split("");
    let digits = [];

    // We're working from left-to-right, therefore use push().
    for (stringDigit of stringDigits) {digits.push(parseInt(stringDigit))};

    return digits;
}

/**
 * Split a multi-digit number into an array of digits using math, not strings.
 * This function satisfies Part 2 of the Day 18 Mission.
 * @param {Number} number - Multi-digit number to split into an array of digits.
 * @returns {Array} digits - An array of digits, each of type Number.
 */
function math_digitSplit(number) {
    let digits = [];

    do {
        let digit = number % 10;
        number = Math.floor(number / 10);

        // We're working from right-to-left, therefore use unshift().
        digits.unshift(digit);
    } while (number > 0);

    return digits;
}

// math_digitSplit(787);

console.log(addDigits(string_digitSplit(firstNumber)));
console.log(addDigits(string_digitSplit(secondNumber)));
console.log(addDigits(math_digitSplit(firstNumber)));
console.log(addDigits(math_digitSplit(secondNumber)));