/*
 * Exercise 1
 * Write an arrow function that returns the string "Hello Radness".
 */
radness = () => "Hello Radness";
console.log(radness());
console.log("");

/*
 * Exercise 2
 * Write an arrow function that expects an array of integers, and returns the 
 * sum of the elements of the array. Use the built-in method reduce() on the 
 * array argument.
 */
arraySum = (array) => array
    .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(arraySum([5,1,5]));
console.log("");

/*
 * Exercise 3
 * Run the following code w/Node to see the result. Then, rewrite the code 
 * using arrow functions wherever it makes sense to use them. The function 
 * should still work.
 */
const Animal = function(animal, sound, delay) {
    this.animal = animal;
    this.sound = sound;
    this.delay = delay;
}
  
Animal.prototype.greet = function() {
    setTimeout(function() {
        console.log(`Hi, I am a ${this.animal}...${this.sound}`);
    }.bind(this), this.delay);
};
  
const dog = new Animal('Dog', 'Bark', 0);
const cat = new Animal('Cat', 'Meow', 0);
  
dog.greet();
cat.greet();