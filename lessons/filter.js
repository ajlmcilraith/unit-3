/* 
! Filter array method
?   - doesn't change or destroy the original array
?   - typically store the filtered array in a new variable
?   - takes a callback function that MUST RETURN either true or false
?   - loops through the array
*/

let fruits = ["apple", "pear", "mango", "orange", "pineapple"] //plural

// ? How can I use a filter to remove the mango? -> f = 

const filteredFruit = fruits.filter((fruit)=> fruit !== "mango")//passes a singular

//for every item that returns true, it gets appended to the new array
console.log(filteredFruit);


let fruit1 = "pinapple"

console.log(fruit1.includes("apple"))


//remove any fruit that has the word apple in it
const filteredFruit2 = fruits.filter((fruit) => !fruit.includes("apple"))

// function example

const filteredFruitFunctionExample = fruits.filter(function (fruit) {
  return fruit !== "mango"
})

// const filteredFruitFunctionExample = fruits.filter(removeMango)

// function removeMango(fruit) {
//   return fruit !== "mango";
// }

// console.log("Filtered Function", filteredFruitFunctionExample)

let myNumberArray = [3, 5, 7, 3, 5, 5, 5, 2, 7, 2, 12, 5];

let filteredArray = myNumberArray.filter((number) => number !== 5 )

let filteredArray2 = myNumberArray.filter(function (number) {
  return number !== 5 
})

console.log("with arrow:", filteredArray, "\nwithout arrow", filteredArray2)

// TODO: Come back here for Jeopardy!! 

let movies = [
  {name: "Top Gun 2", category: "Action"}, 
  {name: "Scary Movie 5", category: "Horror"},
]

movies.push({name: "Get out", category: "Horror"})
movies.push({name: "Color out of Space", category: "Horror"})
movies.push({name: "Taken", category: "Action"})

console.log(movies)

//? How can I get a filtered array of just the action movies

const actionMovies = movies.filter((movie) => movie.category === "Action")

console.log(actionMovies)

const horrorMovies = movies.filter((movie) => movie.category === "Horror")

console.log(horrorMovies)