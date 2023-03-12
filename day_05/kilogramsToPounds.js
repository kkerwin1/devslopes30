/**
 * Convert kilograms to pounds.
 * @param {Number} kilograms 
 * @returns {Number} pounds
 */
function convertKilosToPounds(kilograms) {
    let pounds = kilograms * 2.205;
    return pounds;
}

console.log(convertKilosToPounds(5));
console.log(convertKilosToPounds(22.2));