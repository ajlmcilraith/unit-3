// Create the `series` variable
var series = [0, 1];


while (series.length < 10) {
  let second = series.pop();
  let first = series.pop();
  let third = second + first;
  series.push(first, second, third);
}

// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34


// ! Paul's solution
function userDefinedFibArray(limit = 100, startingNumberOne = 0, startingNumberTwo = 1) {
    
  let series = [startingNumberOne, startingNumberTwo]
  
  while (series.length < limit) {
      let valueTwo = series.pop()
      let valueOne = series.pop()
      let valueThree = valueOne + valueTwo
      series.push(valueOne, valueTwo, valueThree)
  }

  console.log(series)
}

userDefinedFibArray(10, 2, 3)

// ! With readline 

const { type } = require("os")
const { resolve } = require("path")
let readline = require("readline")
let rl = readline.createInterface({input: process.stdin, output: process.stdout})

let ask = async (q) => {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

function userDefinedFibArray(limit = 100, startingNumberOne = 0, startingNumberTwo = 1) {
    
    let series = [startingNumberOne, startingNumberTwo]
    
    while (series.length < limit) {
        let valueTwo = series.pop()
        let valueOne = series.pop()
        let valueThree = valueOne + valueTwo
        series.push(valueOne, valueTwo, valueThree)
    }

    console.log(series)
}

let result = async () => {
    let limit = parseInt(await ask("Limit?"), 10)
    let s1 = parseInt(await ask("First Number?"))
    let s2 = parseInt(await ask("Second Number?"))

    return userDefinedFibArray(limit, s1, s2)
}

result()