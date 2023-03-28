/*
 * Imagine a necklace with lettered beads that can slide along the necklace's strand. In one
 * example, you could take the "E" off of "ERICA" and slide it around the necklace to the other
 * end to make the string "RICAE". You could do it again to get "ICAER", and so on. In this
 * way, "ERICA", "RICAE", and "ICAER" can be said to describe the same necklace.
 * 
 * Generally, two strings describe the same necklace if you can remove some number of letters
 * from the beginning of one string, attach them to the end of the original ordering, and get
 * the other string. Reordering the letters in some other way does not, in general, produce a
 * string that describes the same necklace.
 */

const necklacePairs = [
    ["nicole", "icolen"], // true
    ["nicole", "lenico"], // true
    ["nicole", "coneli"], // false
    ["aabaaaaabaab", "aabaabaabaaa"], // true
    ["abc", "cba"], // false
    ["xxyyy", "xxxyy"], // false
    ["xyxxz", "xxyxz"], // false
    ["x", "x"], // true
    ["x", "xx"], // false
    ["x", ""], // false
    ["", ""], // true
]

/**
 * Create a dictionary object with keys for each character in the string, and values representing
 * the number of incidences of each character in the string.
 * @param {String} necklaceString - A string representing a "necklace".
 * @returns {Object} necklaceDict - Dictionary object with format described above.
 */
function buildNecklaceDictionary(necklaceString) {
    const necklaceDict = {};
    for (const character of necklaceString) {
        if (necklaceDict[character] === undefined) {
            necklaceDict[character] = 1;
        } else {
            necklaceDict[character]++;
        }
    }
    return necklaceDict;
}

/**
 * Determine if the two dictionary objects possess the same number of characters.
 * @param {Object} leftDictionary - Dictionary of format created by buildNecklaceDictionary().
 * @param {Object} rightDictionary - Dictionary of format created by buildNecklaceDictionary().
 * @returns {Boolean} - Returns false if the two dictionary objects contain a different number of
 * characters.
 */
function compareDictionaries(leftDictionary, rightDictionary) {
    for ([character, number] of Object.entries(leftDictionary)) {
        if (number != rightDictionary[character]) {return false};
    }
}

/**
 * Determine whether two strings in an array are "the same" provided: characters from one end
 * of the string can be cycled to the other end of the string.
 * @param {Array} necklacePair - An array of strings.
 * @returns {Boolean} - Whether the two strings in the provided array are "the same" according
 * to the restrictions specified in the function description.
 */
function isSameNecklace(necklacePair) {
    [firstNecklace, secondNecklace] = [necklacePair[0], necklacePair[1]];

    // 1.0: Optimize for speed: quick checks.
    /// 1.1: Same string.
    if (firstNecklace === secondNecklace) {return true};

    /// 1.2: Length discrepancy.
    if (firstNecklace.length != secondNecklace.length) {return false};

    /// 1.3: Empty string.
    if (firstNecklace.length === 0 && secondNecklace.length === 0) {return true};

    /// 1.4: Character count discrepancy.
    const firstDict = buildNecklaceDictionary(firstNecklace);
    const secondDict = buildNecklaceDictionary(secondNecklace);
    if (compareDictionaries(firstDict, secondDict) === false || 
        compareDictionaries(secondDict, firstDict) === false) {return false};

    // 2.0: Rotate algorithm.
    let characterArray = firstNecklace.split("");
    for (index in characterArray) {
        const character = characterArray.shift();
        characterArray.push(character);
        const newString = characterArray.toString().replaceAll(",", "");
        if (newString === secondNecklace) {return true};
    }

    // 3.0: The rotate algorithm failed; therefore, return false.
    return false;
}
for (necklacePair of necklacePairs) {console.log(`${necklacePair}: ${isSameNecklace(necklacePair)}`)};