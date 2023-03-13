var colors = [
    "blue",
    "red",
    "green",
    "yellow",
    "black",
    "white",
];

var moreColors = [
    "purple",
    "magenta",
    "pink",
];

// Remove red, green, and yellow using the splice method.
colors.splice(colors.indexOf("red"), 1);
colors.splice(colors.indexOf("green"), 1);
colors.splice(colors.indexOf("yellow"), 1);

console.log(colors);

// Add the entire moreColors array to the colors array using a single statement.
colors = colors.concat(moreColors);

console.log(colors);