/**
 * Calculate the area of a triangle.
 * @param {Number} base - length of the triangle's base 
 * @param {Number} height - length of the triangle's height
 * @returns {Number} area
 */
function calculateTriangleArea(base, height) {
    let area = 0.5 * base * height;
    return area;
}

console.log(calculateTriangleArea(125, 74));