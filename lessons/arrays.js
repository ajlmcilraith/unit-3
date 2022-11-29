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

let arr = []

// Arrays are great for storing data temporarily

let arrManyDataTypes = ['string', true, 90334, ["john", 'james', 'jeff'], undefined, null]

console.log(arrManyDataTypes)

// ! Accessing Single Dimension Array by index

// ? Arrays of length n+1 are indexed from 0 to n, can be accessed with brackets '[]', can be nested. 
// * strings are also indexed

console.log(arrManyDataTypes[0], arrManyDataTypes[3][2])

//slicing the ing off of 'string'
console.log(arrManyDataTypes[0].slice(3))

// ! Challenge

/* 
  ! Modify our arrManyDataTypes to replace our nested array with an array of your favorite friends.

  ! Extrapolate the data and assign it to a new variable called best friends
*/


arrManyDataTypes[3][0] = 'Dillon'
arrManyDataTypes[3][1] = 'Thomas'
arrManyDataTypes[3][2] = 'Asher'

console.log(arrManyDataTypes)

let wrongFriends = arrManyDataTypes[3]

wrongFriends.push('voldemort')

let bestFriends = []
for (i=0; i<3; i++) {
  bestFriends[i] = arrManyDataTypes[3][i]
}

console.log(arrManyDataTypes[3])

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
  ["Matt Nolan"]
]

console.log(educationTeam.length)

// ? Get the last item of our education team array

// * Array.push()
// Adds an element to an array
// Returns the new length of the array

console.log(educationTeam.push(["Benny Boas", "Kate Sweeney"]))



// * Array.pop()
// Removes last array element and returns it


console.log("popped", educationTeam.pop())

console.log(educationTeam)

// * Array.shift()
// Removes the first element from an array
// Returns the removed first element

// * Array.unshift()
// Adds an elemnt to the beginning of an array
// Returns the new lengthh