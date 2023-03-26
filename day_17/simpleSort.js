/*
 * Create a function that takes an array of numbers. Sort the numbers 
 * in ascending order, then return the sorted array.
 */

const numberArray = [14, 2, 1, 12];
const sortAscending = array => array.sort((a, b) => a-b);
console.log(sortAscending(numberArray));