let userActivity = {
    id: 23894201352,
    date: "January 1, 2017",
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // change code below this line
  userActivity.data.online = 45;
  // change code above this line
  
  console.log(userActivity);


  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  // do not change code above this line
  
  function checkInventory(scannedItem) {
    // change code below this line
    return foods[scannedItem];
  }
  
  // change code below this line to test different cases:
  console.log(checkInventory("apples"));


  let foodss = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  // change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // change code above this line
  console.log(foods);

  function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }


  function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }

  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // change code below this line
    return Object.keys(obj);
    // change code above this line
  }
  
  console.log(getArrayOfUsers(users));


  let user = {
    name: "Kenneth",
    age: 28,
    data: {
      username: "kennethCodesAllDay",
      joinDate: "March 26, 2016",
      organization: "freeCodeCamp",
      friends: ["Sam", "Kira", "Tomo"],
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA"
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // change code above this line
  }
  
  console.log(addFriend(user, "Pete"));