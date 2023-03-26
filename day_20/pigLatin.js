let vowels = ["a", "e", "i", "o", "u", "y"];

function findFirstVowelIndex(word, start) {
    for (i=start; i<=word.length; i++) {
        let character = word[i];
        if (vowels.includes(character)) {return i}
    }
}

function pigLatinize(word) {
    // Standardize as lowercase.
    word = word.toLowerCase();

    /* Fuss with Y.
     *
     * Assume Y is always a vowel, unless it is at the beginning of the word.
     * If multiple Y's are in a word, the first Y is treated as a consonant, but
     * subsequent Y's are treated as vowels.
     */
    let y_isFirstConsonant = (word[0] === "y");

    // Find the first vowel.
    let vowelIndex = 0;
    if (y_isFirstConsonant) {
        vowelIndex = findFirstVowelIndex(word, 1);
    } else {
        vowelIndex = findFirstVowelIndex(word, 0);
    }

    // Trim consonant(s) up to vowelIndex.
    let latinSuffix = "";
    let root = "";
    let consonants = "";
    if (vowelIndex === 0) {
        latinSuffix = "way";
        root = word;
    } else {
        consonants = word.slice(0, vowelIndex);
        root = word.slice(vowelIndex, word.length);
        latinSuffix = consonants + "ay";
    }

    // Pig-latinize.
    let result = root + latinSuffix;
    console.log(result);
}

pigLatinize("fire");
pigLatinize("california");
pigLatinize("Alaska");