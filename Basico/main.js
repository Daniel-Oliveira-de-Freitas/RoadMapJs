let myStr = "Jello World";
console.log(myStr);

myStr = "Hello World";

console.log(myStr);

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
console.log(lastLetterOfLastName);



const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

console.log(myNoun, myAdjective, myVerb)

// Only change code below this line
const wordBlanks = myNoun +" "+ myAdjective +" "+myVerb +" "+ myAdverb; // Change this line
// Only change code above this line
console.log(wordBlanks)


const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

  console.log(subarray);
  console.log(nestedSubarray);
  console.log(element);

  const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  console.log(myData);


  const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

console.log(arr1);
console.log(arr2);

function reusableFunction(){
    console.log("Hi World");
}

reusableFunction();

function functionWithArgs(arg1, arg2){
    console.log(arg1 + arg2);
}

functionWithArgs(1, 2);

function timesFive(num){
    return num * 5;
}

console.log(timesFive(5));

function nextInLine(arr, item) {
  // Only change code below this line
  
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));



function testLogicalOr(val) {
  // Only change code below this line

  if (val< 10 || val > 120) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

console.log(testLogicalOr(15));

function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val <= 5) {
    return "Less than 5";
    
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(4));


function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case 1 :
    answer = "alpha";
    break;
  case 2: 
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4: 
    answer = "delta";
    break;
}
  // Only change code above this line
  return answer;
}

caseInSwitch(1);


function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case 1 :
    answer = "apple";
    break;
  case 2: 
    answer = "bird";
    break;
  case 3:
    answer = "cat";
    break;
  default: 
    answer = "stuff";
    break;
}
  // Only change code above this line
  return answer;
}

caseInSwitch(1);

function isLess(a, b) {
  // Only change code below this line
  return a === b;
  // Only change code above this line
}

console.log(isLess(10, 15));
console.log(isLess(15, 10));

