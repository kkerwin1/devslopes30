/**
 * Given an array of integers, print only the even integers.
 */
function numbers() {
    for (let i=2; i<=100; i++) {
        console.count("iterations");
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

/**
 * Improved version of the numbers() function that completes the process in half the iterations.
 */
function enhancedNumbers() {
    for (let i=2; i<=100; i = i+2) {
        console.count("iterations");
        console.log(i);
    }
}

numbers();
console.countReset("iterations");
enhancedNumbers();