/*
 * Create a terminal-based calculator program using node.
 * 1. Ask the user, "What operation would you like to perform?".
 * 2. Then the user enters one of these options: "/", "*", "-", or "+".
 * 3. If the user enters an invalid character print "That is not a valid operation" and then restart
 *    the program.
 * 4. After the user enters a valid operation, ask the user, "Please enter the first number".
 * 5. The user then enters any group of numbers. If the user enters something that is not a number,
 *    print "This is not a number" and then re-ask the question.
 * 6. After a valid number is entered, ask the user, "Please enter the second number". Perform the
 *    same error handling as before.
 * 7. Then perform the proper math operation and print the result as, "The result is: X", where X is
 *    the actual result.
 */

var readlineSync = require("readline-sync");

let operation = readlineSync.question("What operation would you like to perform? (/, *, -, +): ", {
    limit: ["/", "*", "+", "-"],
    limitMessage: "That is not a valid operation.",
});

let firstNumber = readlineSync.questionFloat("Please enter the first number. ", {
    limitMessage: "This is not a number. ",
});

let secondNumber = readlineSync.questionFloat("Please enter the second number. ", {
    limitMessage: "This is not a number.",
});

switch (operation) {
    case "/":
        console.log(`The result is: ${firstNumber / secondNumber}.`);
        break;
    case "*":
        console.log(`The result is: ${firstNumber * secondNumber}.`);
        break;
    case "+":
        console.log(`The result is: ${firstNumber + secondNumber}.`);
        break;
    case "-":
        console.log(`The result is: ${firstNumber - secondNumber}.`);
        break;
}