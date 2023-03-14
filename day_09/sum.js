var odds = [5, 8, 14, 13, 29, 98];
var evens = [11, 6, 2, 87, 43, 22, 104];

// Use the filter function on the odds array to only store odd numbers.
var oddsFiltered = odds.filter(function(n) {
    return n % 2 === 1;
});
odds = oddsFiltered;
console.log(odds);

// Use the filter function on the evens array to only store even numbers.
var evensFiltered = evens.filter(function(n) {
    return n % 2 === 0;
});
evens = evensFiltered;
console.log(evensFiltered);

// Add the numbers of both arrays, store the result in a variable, and then print it.
var oddsSum = odds.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

var evensSum = evens.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

var sum = oddsSum + evensSum;

console.log(oddsSum);
console.log(evensSum);
console.log(sum);
