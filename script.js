// Animal class definition  
class Animal {  
  constructor(species) {  
    this._species = species; // Initialize species  
  }  

  // Getter for species  
  get species() {  
    return this._species;  
  }  

  // Method to make sound  
  makeSound() {  
    console.log(`The ${this.species} makes a sound`);  
  }  
}  

// Cat class that extends Animal  
class Cat extends Animal {  
  constructor(species) {  
    super(species); // Call the parent constructor  
  }  

  // Method for purring  
  purr() {  
    console.log("purr");  
  }  
}  

// Dog class that extends Animal  
class Dog extends Animal {  
  constructor(species) {  
    super(species); // Call the parent constructor  
  }  

  // Method for barking  
  bark() {  
    console.log("woof");  
  }  
}  

// Do not change the code below this line  
window.Animal = Animal;  
window.Dog = Dog;  
window.Cat = Cat;