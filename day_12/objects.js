let vehicles = {
    Honda: "CRV",
    Jeep: "Wrangler",
    Chrysler: "Pacifica",
    Ford: "F150",
}

for (key of Object.keys(vehicles)) {
    if (key === "Ford") {
        delete vehicles["Ford"];
        break;
    }
}

console.log(vehicles);