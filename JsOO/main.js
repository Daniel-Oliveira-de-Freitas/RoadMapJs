let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + dog.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();

  let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return "This dog has " + this.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();

  function Dog3() {
    (this.name = "Geogre"), (this.color = "White"), (this.numLegs = 4);
  }

  function Dog1(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog1("George", "White");

  /* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Add your code below this line
  let myHouse = new House(5);
  myHouse instanceof House;

  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownPropss = [];
  // Add your code below this line
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownPropss.push(property);
    }
  }

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  // Add your code above this line
  let beaglee = new Dog("Snoopy");

  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Add your code below this line
  for (let property in beagle) {
    if (Dog.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

  function Dog(name) {
    this.name = name;
  }
  Dog.prototype = {
    // Add your code below this line
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  Dog.prototype = {
    constructor: Dog, // Solution
  
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };


