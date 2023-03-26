/**
 * Find the longest string in an array of strings.
 * @param {Array} stringArray - Array of strings.
 * @returns {String} longestString - 
 */
function findLongestString(stringArray) {
    let longestString = "";

    for (let string of stringArray) {
        if (string.length > longestString.length) {longestString = string};
    }

    return longestString;
}

let stringArray = ["bob", "super", "devslopes"];
console.log(findLongestString(stringArray));