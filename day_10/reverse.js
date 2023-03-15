var words = [
    "ant",
    "awkward",
    "car",
    "zebra",
];

// Reverse this array using the built-in reverse() method.
words.reverse();
console.log(words);

// reverse() overwrites the original array; so we reverse() it again 
// to return it to its original state.
words.reverse();

// Reverse this array again, but this time using a loop and without
// using any built-in functions.
let invertedWordsArray = [];
for (var i=words.length-1; i>=0; i--) {
    invertedWordsArray[invertedWordsArray.length] = words[i];
}

console.log(invertedWordsArray);