function getHexString(integer) {
    let hexDictionary = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F",
    }

    if (integer > 255 || integer < 0) {
        throw "RGB RangeError";
    } else {
        let quotient = Math.floor(integer/16);
        let remainder = integer % 16;

        let hexString = hexDictionary[quotient] + hexDictionary[remainder];
        return hexString;
    }
}

function convertRGBToHex(red, green, blue) {
    let hexString = "#";
    hexString += getHexString(red);
    hexString += getHexString(green);
    hexString += getHexString(blue);
    console.log(hexString);
}

convertRGBToHex(255, 99, 71);
