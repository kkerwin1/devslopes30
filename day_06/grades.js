/**
 * Converts score to letter grade.
 * @param {Number} _grade 
 * @returns {String}
 */
function checkGrade(_grade) {
    let grades = _grade;

    if (grades > 90) {
        return "AA";
    } else if (grades > 80 && grades <= 90) {
        return "AB";
    } else if (grades > 70 && grades <= 80) {
        return "BB";
    } else if (grades > 60 && grades <= 70) {
        return "BC";
    } else if (grades > 50 && grades <= 60) {
        return "CC";
    } else if (grades > 40 && grades <= 50) {
        return "CD";
    } else if (grades > 30 && grades <= 40) {
        return "DD";
    } else if (grades <= 30) {
        return "FF";
    }
}

console.log(checkGrade(95));
console.log(checkGrade(85));
console.log(checkGrade(75));
console.log(checkGrade(65));
console.log(checkGrade(55));
console.log(checkGrade(45));
console.log(checkGrade(35));
console.log(checkGrade(25));