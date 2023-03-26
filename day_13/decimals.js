/*
 * Create a terminal-based calculator using Node.js.
 * 1. Handle remainders properly.
 * 2. Make the program more elegant by allowing the user to enter an entire
 *    operation on one line such as "6 / 6" or "5 * 3".
 */

var readlineSync = require("readline-sync");

let expression = readlineSync.question("Enter a simple arithmetic expression: ", {
    limit: "/[\d+\.?\d*\s*(\/|\*|\+|\-)\s*\d+\.?\d*]/g",
    limitMessage: "That is not a valid expression.",
});

console.log(expression);