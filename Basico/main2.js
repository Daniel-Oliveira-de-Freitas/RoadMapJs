function myFun() {
    console.log("Hello");
    return "World";
  }
  myFun();


  // Setup
const testObj1 = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj1.hat;    // Change this line
  const shirtValue = testObj1.shirt;    // Change this line

  // Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj[16];   // Change this line


// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
console.log(myDog);
// Only change code below this line
//add novos valores 
myDog["name"] = "Happy Camper";
myDog.tails= 2; // Change this line
console.log(myDog);

myDog.name = "Jimi";
console.log(myDog);

myDog.bark = "bow-wow"
console.log(myDog);


const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);


const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;

  console.log(myArray);
}

const ourArray = [];

for (let i = 1; i < 5; i ++) {
  ourArray.push(i);
  console.log(ourArray);
}

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
  console.log(ourArray);
}

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);