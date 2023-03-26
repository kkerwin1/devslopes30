/**
 * Clean a string of the characters: {, }, [, ], !, <, >, (, ). Replaces
 * characters with a space.
 * @param {String} dirtyString - String to parse and clean of 
 * prohibitedCharacters.
 * @returns {String} Cleaned string.
 */
function removeJunk(dirtyString) {
    let prohibitedCharacters = ["{","}","[","]","!","<",">","(",")"];

    for (character of prohibitedCharacters) {
        dirtyString = dirtyString.replaceAll(character, " ");
    }
    return dirtyString;
}

let testStrings = [
    "7!as74df",
    "u8)7u(tu",
    "t<5[t}m{",
    "ry]b!h1r",
]

for (testString of testStrings) {
    console.log(`${testString}: ${removeJunk(testString)}`);
}