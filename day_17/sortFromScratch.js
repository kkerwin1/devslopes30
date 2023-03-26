/*
 * Create a function to sort an array of numbers without using built-in functions.
 */

const numberArray = [14, 2, 1, 12];

function sortFromScratch(unsortedArray) {
    let sortedArray = [];

    // Step through the numbers of the unsorted array.
    for (unsortedNumber of unsortedArray) {

        // sortedArray is empty, push() first number onto the array.
        if (sortedArray.length === 0) {
            sortedArray.push(unsortedNumber);
        
        // sortedArray is not empty, do some sorting.
        } else {
            for (i in sortedArray) {
                let sortedNumber = sortedArray[i];
                
                // Insert unsortedNumber where it is <= the next number in the array.
                if (unsortedNumber <= sortedNumber) {
                    sortedArray.splice(i, 0, unsortedNumber);
                    break;
                } else {
                    continue;
                }
            }
        }
    }
    return sortedArray;
}

console.log(sortFromScratch(numberArray));