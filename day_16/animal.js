const Animal = function(animal, sound, delay) {

    this.animal = animal,
  
    this.sound = sound;
  
    this.delay = delay;
  
  }
  
  Animal.prototype.greet = function() {
  
    setTimeout(function() {
  
      console.log(`Hi, I am a ${this.animal}...${this.sound}`);
  
    }.bind(this), this.delay);
  
  };
  
  const dog = new Animal('Dog', 'Bark', 3000);
  
  const cat = new Animal('Cat', 'Meow', 200);
  
  dog.greet();
  
  cat.greet();