function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

function Dog(name) {
    this.name = name;
  }
  
  let beagl = new Dog("Snoopy");
  
  // Add your code below this line
  Dog.prototype.isPrototypeOf(beagl);

  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle); // => true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);
  

  function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() {}
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };

  function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beaglee = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beaglee.eat(); // Should print "nom nom nom"


function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() {}

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagler = new Dog();
beagler.eat(); // Should print "nom nom nom"


