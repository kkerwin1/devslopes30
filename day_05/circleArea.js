/**
 * Calculate the area of a circle.
 * @param {Number} radius - radius of the circle
 * @returns {Number} area - area of the circle 
 */
function calculateCircleArea(radius) {
    area = Math.PI * Math.pow(radius, 2);
    return area;
}

console.log("Area of circle with radius 15: " + calculateCircleArea(15));
console.log("Area of circle with radius 7: " + calculateCircleArea(7));
console.log("Area of circle with radius 128: " + calculateCircleArea(128));
console.log("Area of circle with radius 6: " + calculateCircleArea(6));