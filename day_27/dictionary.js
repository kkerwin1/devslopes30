// Dictionary URL: https://ios13-book.sfo2.digitaloceanspaces.com/learning/K.csv
const fileName = "K.csv";

const { open, readFile } = require('fs/promises');

const delimiters = [" () ", " (n.) ", " (n. & v. t.) ", 
                    " (n & v.) ", " (a.) ", " (n. pl.) ",
                    " (v. t.) ", " (n. Chem.) ) ", " (pl. ) ",
                    " (n.) (Physiol.) ", " (v. i. & n.) ",
                    " (imp. & p. p.) ", " (p. pr. & vb. n.) ",
                    " (v. i.) ", " (v. i. & n.) ", " (imp. & p. p.) ",
                    " (superl.) ", " (adv.) ", " (v. i.) ", " (p. p.) ",
                    " (imp.) ", " (v. t. & i.) ", " (m.) ", 
                    " (n.) (Zool.) ", " (n. & v.) ", " (n. & v. i.) ",
                    " (n.) (Mus.) ", " (a & n.) "]

async function readLines(file_name) {
    let lineArray = [];
    const file = await open(file_name);
    const contents = await readFile(file, {encoding: "utf-8"});

    for (let line of contents.split("\n")) {
        // Strip extraneous quotes.
        line = line.replaceAll('"', "");
        line = line.replaceAll("'", "");

        // Trim.
        line = line.trim();

        // Skip empty lines
        if (line.length > 0) {
            // Add line to lineArray.
            lineArray.push(line);
        }       
    }
    return lineArray;
}

function capitalize(word) {
    let characterArray = word.split("");
    let firstCharacter = characterArray.shift();
    firstCharacter = firstCharacter.toUpperCase();
    characterArray.unshift(firstCharacter);
    let capitalWord = "";
    for (let character of characterArray) {capitalWord += character};
    return capitalWord;
}

function dictionaryLookup(word, _lineArray) {
    let lineArray = _lineArray;
    let confirmedMatches = [];
    let definitions = [];
    let capitalizedWord = capitalize(word);

    // Locate matching definitions; we will return ALL matching definitions, not just one.
    for (let line of lineArray) {
        if (line.toLowerCase().startsWith(word)) {confirmedMatches.push(line)}
    }

    if (confirmedMatches.length > 0) {
        for (let line of confirmedMatches) {
            for (let delimiter of delimiters) {
                if (line.includes(delimiter)) {
                    [word, definition] = line.split(delimiter);
                    definitions.push(definition);
                }
            }
        }
        if (confirmedMatches.length > 1) {
            console.log(`${capitalizedWord} has ${confirmedMatches.length} definitions:`);
            for (definition of definitions) {console.log(`${definition}`)};
            console.log("\n");
        } else {
            console.log(`${capitalizedWord}: ${definitions[0]}`);
            console.log("\n");
        }
    } else {
        console.log(`Word (${word}) not found.`);
        console.log("\n");
    }
}

// Tests
async function main() {
    const lineArray = await readLines(fileName);
  
    dictionaryLookup("kris", lineArray);
    dictionaryLookup("kokoon", lineArray);
    dictionaryLookup("beard", lineArray);
  }
  
  main();
  