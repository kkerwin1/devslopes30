/* 
 * Create a function that takes a String as a parameter.
 * Return the sum of any integers that are in the string.
 * Example: Given "GH2U87A", you would return the value 17
 * (2+8+7). If there are no numbers in the string, return 0.
 */

// Strings to parse.
let stringArray = [
    "N6R3WR5I51",
    "O74SD488IV",
    "QL59B5YEM9",
    "47784CNCBT",
    "U93K69VQ57",
];

/**
 * Parse a string for integers, find the sum of those integers, and print the sum.
 * @param {String} string - string to parse
 */
function sumString(string) {
    let array = string.split("");
    let numberSum = array
        .filter(character => !isNaN(parseInt(character)))
        .reduce((accumulator, currentValue) => {return accumulator + parseInt(currentValue)}, 0);
    console.log(`${array}: ${numberSum}`);
}

// Iterate over the strings in stringArray.
for (string of stringArray) {sumString(string)};