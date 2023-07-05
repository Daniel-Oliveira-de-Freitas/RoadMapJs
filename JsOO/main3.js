function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Dog() {}

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};
// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"


let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Add your code below this line
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding!");
    };
  };
  glideMixin(bird);
  glideMixin(boat);

  function Bird() {
    let weight = 15;
  
    this.getWeight = function() {
      return weight;
    };
  }

  (function() {
    console.log("A cozy nest is ready");
  })();