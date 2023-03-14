var states = [
    "alaska", 
    "alabama", 
    "arkansas", 
    "missouri",
    "texas",
    "nevada",
    "california",
];

var filterMapReduce = states
    
    // Use filter() to only select states that start with "a".
    .filter(function(state) {
        return state[0] === "a";
    })

    // Using method chaining, use map()  to reduce each state to 3 characters.
    .map(function(state) {
        return state.slice(0, 3);
    })

    // Using method chaining, use reduce() to add up the count of character from the remaining words.
    .reduce(function(accumulator, substring) {
        return accumulator + substring.length;
    }, 0);

// Print the final result.
console.log(filterMapReduce);