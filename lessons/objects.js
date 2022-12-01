/* 
Objects

Objects contain properties
Visually you will see them with Key & Value Pairs
Keys will always strings "Most of time Single String" ex: "age", "firstName"
Values can be of any datatype: strings, booleans numbers, undefined, null, arrays, objects, functions
*/


let abby = {
  species:"dog",
  color: "brown",
  spayed: true,
  breed: "mutt",
  weight: 40,
  favoriteActivity: "chasing squirrels",
  bestPlayFriends: ["Buster", "Lady", "Daisy"]
}
//key can also be a string with spaces, e.g. "favorite activity"

// ? How do we access data within the object
// ! we can use 'dot notation'

//accessing the color?
console.log("color", abby.color)

//access the breed?
console.log("breed", abby.breed)

//access abby
console.log("best play friends", abby.bestPlayFriends[1])

// ! we can use 'square braket notation'

//Favorite Activityy
console.log("favorite activity", abby["favoriteActivity"])

// ? How do we add a new property to an object? Example: add age as a propert
abby.age = 5;
console.log(`Abby is ${abby.age} years old`)

// How can I get a list of the key values and have the in an array?

let abbyKeys = Object.keys(abby);

//get a list of values

let abbyValues = Object.values(abby)

//console.log(abbyKeys)
//console.table(abbyValues)


let buster = {
  species: "dog",
  color: "black",
  spayed: false,
  breed: "husky",
  weight: 35,
  favoriteActivity: "chasing dogs",
  bestPlayFriends: ["abby"],
};

abby.name = "Abby";
buster.name = "Buster";
let combinedObjects = [abby, buster];

//console.log("combined", combinedObjects);

//accessing data 

let sentence = `${combinedObjects[0].name} is a ${combinedObjects[0].species} and has ${combinedObjects[0].bestPlayFriends.length} friends`;

console.log('\n', sentence)




