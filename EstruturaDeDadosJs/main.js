
function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
  // do not change code below this line
  console.log(popShift(["challenge", "is", "not", "complete"]));


  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// only change code below this line
arr.splice(1, 4);
// only change code above this line
console.log(arr);


function htmlColorNames(arr) {
    // change code below this line
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    // change code above this line
    return arr;
  }
  
  // do not change code below this line
  console.log(
    htmlColorNames([
      "DarkGoldenRod",
      "WhiteSmoke",
      "LavenderBlush",
      "PaleTurqoise",
      "FireBrick"
    ])
  );


  function forecast(arr) {
    // change code below this line
    return arr.slice(2, 4);
  }
  
  // do not change code below this line
  console.log(
    forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
  );


  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // change code below this line
      newArr.push([...arr]);
      // change code above this line
      num--;
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([true, false, true], 2));

  function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
    return sentence;
  }
  
  // do not change code below this line
  console.log(spreadOut());

  function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
      return true;
    }
    return false;
  }
  console.log(quickCheck(["squash","onions","shallots"],"mushrooms"));


  function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        //Checks every parameter for the element and if is NOT there continues the code
        newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
      }
    }
  
    // change code above this line
    return newArr;
  }
  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


  let myNestedArray = [
    // change code below this line
    ["unshift", false, 1, 2, 3, "complex", "nested"],
    ["loop", "shift", 6, 7, 1000, "method"],
    ["concat", false, true, "spread", "array", ["deep"]],
    ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
    ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
    // change code above this line
  ];