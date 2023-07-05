  const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });


  function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift(['I', 2, 'three']);
  
  arr.push([7, 'VIII', 9]);
    // Only change code above this line
    return arr;
  }
  
  
  
  console.log(mixedNumbers(['IV', 5, 'six']));