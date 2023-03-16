// Write a function that returns the total count of integers that are not
// multiples of either 6 or 15 between a range of 1 and 200.

let numberArray = [];

// Populate numberArray
for (let i=1; i<=200; i++) {numberArray.push(i)};

console.log(numberArray.filter(number => {return (number % 6 !== 0 && number % 15 !== 0)}).length)