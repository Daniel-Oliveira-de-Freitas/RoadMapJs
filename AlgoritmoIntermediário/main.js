function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);

  function diffArray(arr1, arr2) {
    const newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


  function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }

  function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    const souceKeys = Object.keys(source);
  
    // filter the collection
    return collection.filter(obj => {
      for (let i = 0; i < souceKeys.length; i++) {
        if (obj[souceKeys[i]] !== source[souceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
  }

  function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
  }
  
  // test here
  spinalCase("This Is Spinal Tap");

  function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");


  function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

  function pairElement(str) {
    // Function to match each character with the base pair
    const matchWithBasePair = function(char) {
      switch (char) {
        case "A":
          return ["A", "T"];
        case "T":
          return ["T", "A"];
        case "C":
          return ["C", "G"];
        case "G":
          return ["G", "C"];
      }
    };
  
    // Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
      pairs.push(matchWithBasePair(str[i]));
    }
  
    return pairs;
  }
  
  // test here
  pairElement("GCG");


  function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      /* code of current character */
      const charCode = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          then a letter was skipped */
      if (charCode !== str.charCodeAt(0) + i) {
        /* if current character skipped past a character find previous character and return */
        return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }
  
  // test here
  fearNotLetter("abce");

  function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    const finalArray = [];
  
    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (let i = 0; i < arguments.length; i++) {
      const arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (let j = 0; j < arrayArguments.length; j++) {
        let indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  
    return finalArray;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  