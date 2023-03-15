var nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Write code that loops through the nums array, adds only the even numbers,
// and stores the final result in the evenTotal variable.
var evenTotal = nums

    // First, we filter() out the even numbers.
    .filter(function (number) {
        return number % 2 === 0;
    })

    // Second, we reduce() the array of even numbers to a single sum.
    .reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });

console.log(evenTotal);