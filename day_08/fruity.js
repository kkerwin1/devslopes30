var fruits = [
    "apple",
    "banana",
    "orange",
    "strawberry",
];

// Remove "orange" from the array.
fruits.splice(fruits.indexOf("orange"), 1);
console.log(fruits);

// Remove the last item from the array.
fruits.pop();
console.log(fruits);

// Insert "pear" at the beginning of the array.
fruits.unshift("pear");
console.log(fruits);

// Remove all elements from the array.
fruits.splice(0, 4);
console.log(fruits);