// Basic Data Structures: Check if an Object has a Property

/*
To check if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. 
*/

/*
We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.
*/
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
//   if('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users){
//     return true
//   }else{
//     return false
//   }

    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
        obj.hasOwnProperty(name)
    );

  // Only change code above this line
}

console.log(isEveryoneHere(users));



