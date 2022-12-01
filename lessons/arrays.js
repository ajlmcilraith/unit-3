// ! Arrays

/*
? Array is a list-like object whose prototype has methods to perform:
  * traversal
  * mutation
  * other operations
? Arrays are:
  * denoted by [ ]
  * hold multiple data types 
  * mutable (can be modified)
  * contents can be ccessed by their index
*/

// ? Creating an array literal

let arr = [];

// Arrays are great for storing data temporarily

let arrManyDataTypes = [
  "string",
  true,
  90334,
  ["john", "james", "jeff"],
  undefined,
  null,
];

console.log(arrManyDataTypes);

// ! Accessing Single Dimension Array by index

// ? Arrays of length n+1 are indexed from 0 to n, can be accessed with brackets '[]', can be nested.
// * strings are also indexed

console.log(arrManyDataTypes[0], arrManyDataTypes[3][2]);

//slicing the ing off of 'string'
console.log(arrManyDataTypes[0].slice(3));

// ! Challenge

/* 
  ! Modify our arrManyDataTypes to replace our nested array with an array of your favorite friends.

  ! Extrapolate the data and assign it to a new variable called best friends
*/

arrManyDataTypes[3][0] = "Dillon";
arrManyDataTypes[3][1] = "Thomas";
arrManyDataTypes[3][2] = "Asher";

console.log(arrManyDataTypes);

let wrongFriends = arrManyDataTypes[3];

wrongFriends.push("voldemort");

let bestFriends = [];
for (i = 0; i < 3; i++) {
  bestFriends[i] = arrManyDataTypes[3][i];
}

console.log(arrManyDataTypes[3]);

// ! Array Methods

/*
 * Array methods are functions that work on Array constructor
 * Allow us to mutate, traverse, and do othher things to arrays
 * Denoted by a '.' at the end of an array we're working on
 */

// ? Array Length Methods

let educationTeam = [
  ["Paul Niemczyk", "Rob Vanarsdall", "Josh Burke", "Eric Winebrenner"],
  ["Elena Bilodeau", "Ben Villa", "Dave Landey"],
  ["Matt Nolan"],
];

console.log(educationTeam.length);

// ? Get the last item of our education team array

// * Array.push()
// Adds an element to an array
// Returns the new length of the array

console.log(educationTeam.push(["Benny Boas", "Kate Sweeney"]));

// * Array.pop()
// Removes last array element and returns it

console.log("popped", educationTeam.pop());

console.log(educationTeam);

// * Array.shift()
// Removes the first element from an array
// Returns the removed first element

// * Array.unshift()
// Adds an elemnt to the beginning of an array
// Returns the new lengthh

// ! Advanced array methods

let bulldogTypes = [
  "English Bulldog",
  "French Bulldog",
  "Victorian Bulldog",
  "Old English Bulldog",
  "Bullmastiff",
];

// for (i in /* or 'of' */ bulldogTypes) {
//   console.log(bulldogTypes[i])
// }

// * Array.forEach()
// fires a callback function on each element of an array
// takes item parameter (each iterable)
// takes index parameter (index of each iterable)
// takes array parameter (original array on which .forEach() is working)

// bulldogTypes.forEach((item) => console.log(i.toLowerCase()))

bulldogTypes.forEach((item, index, array) => {
  array[index] = item.toLowerCase();
});
console.log(bulldogTypes);

// * Array.map()
// Creates/returns an array with elements resulting from the callback function

let marvelCharacters = [
  "Iron Man",
  "Spider Man",
  "Steven Strange",
  "The Increndible Hulk",
];

marvelCharacters.map((character, item, array) => {
  character == "Iron Man" ? array.pop() : null;
});

let capitalized = marvelCharacters.map((i) => i.toUpperCase());

capitalized.push("Hawkeye");

// ? .map creates/returns a copy of an array. It will not modify the original
console.log("original", marvelCharacters, "\nnew", capitalized);

// * Array.filter()
//   Creates a new array based on a filter function

let startsS = marvelCharacters.filter((i) => i.startsWith("S"));
console.log("Starts with S: ", startsS);

// ! Mini Challenge

// ? Utilize on of the array methods to raise the grade by 15 points for everyone
// ? Those above 90 should not get any points

let grades = [56, 78, 96, 41, 22, 7, 15, 10, 89];

console.log(grades);

grades.forEach((grade, index, array) => grade <= 90 ? (array[index] = grade + 15) : null);

console.log(grades);
