let students = {
    Jon: {
        age: 27,
        online: false,
    },
    Jack: {
        age: 32,
        online: true,
    },
    Jenn: {
        age: 48,
        online: false,
    },
    Liz: {
        age: 19,
        online: true,
    },
};

// Add all keys and subkeys to a single array.
let allKeys = [];
for (key of Object.keys(students)) {
    allKeys.push(key);
    for (subkey of Object.keys(students[key])) {allKeys.push(subkey)};
}

console.log(allKeys);