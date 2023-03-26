function builtin_sqrt(number) {
    return Math.sqrt(number);
}

function nonbuiltin_sqrt(number) {
    return number ** 0.5;
}

console.log(builtin_sqrt(3));
console.log(nonbuiltin_sqrt(3));