const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

function toRomanNumeral(number) {
    let result = '';
    for (let key in romanNumerals) {
        while (number >= romanNumerals[key]) {
            result += key;
            number -= romanNumerals[key];
        }
    }
    return result;
}

console.log(2, toRomanNumeral(2));
console.log(3, toRomanNumeral(3));
console.log(44, toRomanNumeral(44));
console.log(649, toRomanNumeral(649));
console.log(2014, toRomanNumeral(2014));
console.log(3999, toRomanNumeral(3999));