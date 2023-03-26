function Character(character) {
    this[character] = false;
}

class AnagramTest {
    constructor(string) {
        this.string = string;
        this.characterArray = [];

        // Character objects must be stored in an array in case there are duplicate characters.
        for (let character of string.split("")) {this.characterArray.push(new Character(character))};
    }

    isTrue() {
        let boolean = true;
        for (let characterObject of this.characterArray) {
            boolean = characterObject[Object.keys(characterObject)[0]];
        }
        return boolean;
    }

    testCharacter(probeCharacter) {
        let status = false;
        for (let characterObject of this.characterArray) {
            // Skip characters that are already marked true.
            let boolean = characterObject[Object.keys(characterObject)[0]];

            if (boolean) {
                continue;
            } else {
                // Mark a new character as true.
                let character = Object.keys(characterObject)[0];
                if (probeCharacter === character) {
                    characterObject[Object.keys(characterObject)[0]] = true;
                    status = true;
                    break;
                }
            }
        }
        return status;
    }

    probeCharacters(anagramTest) {
        let overallStatus = true;
        for (let characterObject of this.characterArray) {
            let character = Object.keys(characterObject)[0];
            let status = anagramTest.testCharacter(character);
            characterObject[Object.keys(characterObject)[0]] = status;

            if (!status) {
                overallStatus = status;
                break;
            }
        }

        return overallStatus;
    }
}

function testAnagram(testString, probeString) {
    t_anagram = new AnagramTest(testString);
    p_anagram = new AnagramTest(probeString);

    return (p_anagram.probeCharacters(t_anagram) && t_anagram.isTrue());
}

console.log(testAnagram("evil", "vile"));
console.log(testAnagram("restful", "fluster"));
console.log(testAnagram("bill", "sam"));