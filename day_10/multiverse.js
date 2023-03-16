// Multiply two matrices.

let array1 = [
    [1, 2, 3],
    [4, 5, 6],
];

let array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
];

/**
 * Returns an array consisting of a column of a multidimensional array.
 * @param {Array} array - Array to sort.
 * @param {Number} columnNumber - Column number to select.
 * @returns {Array} columnArray - An array consisting of members of the column.
 */
function getColumn(array, columnNumber) {
    let columnArray = [];
    for (row of array) {
        columnArray.push(row[columnNumber]);
    }
    return columnArray;
}

// Empty solution array.
let array3 = [
    [],
    [],
];

let column0 = getColumn(array2, 0);
let column1 = getColumn(array2, 1);

let a = 0;
let b = 0;
let c = 0;
let d = 0;

// Perform the dot product calculation.
for (i=0; i<3; i++) {
    a = a + array1[0][i] * column0[i];
    b = b + array1[0][i] * column1[i];
    c = c + array1[1][i] * column0[i];
    d = d + array1[1][i] * column1[i];
}

array3[0][0] = a;
array3[0][1] = b;
array3[1][0] = c;
array3[1][1] = d;

console.table(array3);