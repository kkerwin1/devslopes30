var firstString = "Welcome";
var secondString = "Hello, World!";
var thirdString = "Disaster";

var new_firstString = firstString.slice(0, firstString.indexOf("c")+1);
var new_secondString = secondString.replace("World!", "");
var new_thirdString = thirdString.substr(thirdString.lastIndexOf("D"), 1);   // substr() is deprecated

console.log(new_firstString);
console.log(new_secondString);
console.log(new_thirdString);