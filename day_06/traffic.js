/**
 * Determine whether to drive through an intersection.
 * @param {String} _lightStatus - color of the traffic light
 * @param {Boolean} _isInIntersection - whether we are in the intersection
 * @param {Boolean} _emergencyVehicle - whether an emergency vehicle is present
 * @returns {String}
 */
function checkIntersection(_lightStatus, _isInIntersection, _emergencyVehicle) {
    let status = _lightStatus;
    let isInIntersection = _isInIntersection;
    let emergencyVehicle = _emergencyVehicle;

    if (isInIntersection) {
        return "You can drive.";
    } else if (emergencyVehicle) {
        return "Do not drive.";
    } else if (status === "Green") {
        return "You can drive.";
    } else if (status === "Yellow") {
        return "Prepare to stop.";
    } else if (status === "Red") {
        return "Do not drive.";
    }
}

console.log("GFF: " + checkIntersection("Green", false, false));
console.log("GTF: " + checkIntersection("Green", true, false));
console.log("GTT: " + checkIntersection("Green", true, true));
console.log("GFT: " + checkIntersection("Green", false, true));

console.log("");

console.log("YFF: " + checkIntersection("Yellow", false, false));
console.log("YTF: " + checkIntersection("Yellow", true, false));
console.log("YTT: " + checkIntersection("Yellow", true, true));
console.log("YFT: " + checkIntersection("Yellow", false, true));

console.log("");

console.log("RFF: " + checkIntersection("Red", false, false));
console.log("RTF: " + checkIntersection("Red", true, false));
console.log("RTT: " + checkIntersection("Red", true, true));
console.log("RFT: " + checkIntersection("Red", false, true));
