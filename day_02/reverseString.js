var originalString = "Hello, World!";

/**
 * Provided a string, return the string in reverse. Uses built-in methods.
 * @param {String} forwardString - string to invert
 * @returns {String} invertedString
 */
var reverseString1 = function(forwardString) {
    let invertedString = "";
    for (let i=forwardString.length-1; i>=0; i--) {
        let character = forwardString.charAt(i);
        invertedString += character;
    }
    return invertedString;
}

/**
 * Provided a string, return the string in reverse. Uses faster array method.
 * @param {String} forwardString - string to invert
 * @returns {String} invertedString
 */
var reverseString2 = function(forwardString) {
    let invertedString = "";
    invertedString = forwardString.split("").reverse().join("");
    return invertedString;
}

var invertedString1 = reverseString1(originalString);
var invertedString2 = reverseString2(originalString);
console.log(invertedString1);
console.log(invertedString2);