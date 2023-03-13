var colors = [
    "blue",
    "red",
    "green",
    "yellow",
    "black",
    "white",
];

// Change each element in the array to be all caps (upper case) --
// you must do this with one line of code and w/o using bracket notation
let capitalize = (list) => list.join(",").toUpperCase().split(",");

console.log(capitalize(colors));