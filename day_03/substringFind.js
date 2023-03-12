// Advanced challenge, day 3.

/**
 * Search a string to determine whether it contains any portion of a second string.
 * Uses builtin methods.
 * @param {String} stringToSearch - string to be searched.
 * @param {String} probeString - string containing substrings to search with.
 * @returns {Boolean} 
 */
function builtin_substringFind(stringToSearch, probeString) {
    var result = false;
    for (let i=0; i<=probeString.length-1; i++) {
        let character = probeString[i];
        result = stringToSearch.includes(character);
        if (result === true) { break; }
    }
    return result;
}

/**
 * Search a string to determine whether it contains any portion of a second string.
 * Uses uses non-builtin methods.
 * @param {String} stringToSearch - string to be searched.
 * @param {String} probeString - string containing substrings to search with.
 * @returns {Boolean} 
 */
function nonbuiltin_substringFind(stringToSearch, probeString) {
    var result = false;
    for (let i=0; i<=probeString.length-1; i++) {
        let searchCharacter = probeString[i];
        for (let j=0; j<=stringToSearch.length-1; j++) {
            let matchCharacter = stringToSearch[j];
            if (searchCharacter === matchCharacter) {
                result = true;
                break;
            }
        }
    }
    return result;
}

console.log(builtin_substringFind("Hello, World", "Any old string"));
console.log(nonbuiltin_substringFind("Hello, World", "Any old string"));