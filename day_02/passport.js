var firstName = "John";
var lastName = "Smith";
var age = 53;
var dateOfBirth = "01/01/1970";
var isOrganDonor = true;
var country = "United States";
var state = "WA";
var streetAddress = "1234 Test Dr";
var city = "Redmond";
var postalCode = 12345;

var outputString = "My name is " + firstName + " " + lastName + ". I was born on " + dateOfBirth + " and am " + age + " years old. I live at " 
+ streetAddress + " in " + city + ", " + state + " " + postalCode + " in the " + country + ". It is " + isOrganDonor + " that I am an organ donor.";

console.clear();
console.log(outputString);