// ! This state-based code will be useful for zorkington project


const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
let white = "\033[0;39m";
let yellow = "\033[0;33m";

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
// Don't change anything above this line!!!

/* 
TODO Create an object called states (in the project this can be called anything) 
  * the keys will be: elementary, middle school, high school, college, military
  * each key will have a value that is in an array format
  * elementary you can only go to middle school
  * high school - to college, work, military 
  * college - go to work
  * military - go to work or college

*/

let states = {
  elementary: ["middle school"],
  "middle school": ["high school"],
  "high school": ["college", "military"],
  military: ["work", "college"]
};

// * Initialize current state to be elementary
let currentState = "elementary";

async function respond() {
  // your code here
  // remember to use `await` and `ask`
  let answer;
  while (answer !== "exit"){

    answer = await ask(
      `What state would you like to go to? Your current state is ${currentState} >_`
    );
    updateState(answer)
  }
  process.exit();
}

respond();

/* 
    ? - function should check to see if the current new state selection is an option to move to the next state options
    ? - Example: I can only go to Middle School if it's on the list
    ? - if we do not have a match then display that to the user and what are the valid paths they can go
*/

function updateState(newState) {
  let possibleOptionsToUpdateState = states [currentState];
  if (possibleOptionsToUpdateState.includes(newState)) {
    currentState = newState;
    console.log(yellow + `You have successfully changed your status to ${newState}` + white
    )// using yellow and white to color code the message, white changes it back
  } else {
    // Let the user know that they typed in a wrong response
    console.log(
      yellow +
      `What you typed in is not a valid option. Valid options are the following: ` + possibleOptionsToUpdateState.join(", ") +
      white
    )
  }
}

// ? @ajlmcilraith


// weird object thing! 
/* 
let firstName = "Alice"
let lastName = "McIlraith"

person1 = {
  firstName, lastName
} 
*/