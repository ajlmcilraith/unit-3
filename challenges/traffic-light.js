/* 

We will have a lookup table that maps the state of the traffic light to the possible next valid states of the traffic light.

We will also have a function that changes the current valid state to the next valid state, and prints output to show us what state the system is in. If there is an attempt to put the system in an invalid state, the function will prevent the transition and print some output to tell us that an error occured.

Variables
[ ] Create a lightCurrent variable and set it equal to redLight.
[ ] Create a lightLookUp lookup table that maps the Strings of the color and state of our objects to their Object.
LightStates
[ ] Create a lightStates state machine that maps the states of our objects to their possible next states.
[ ] Create a console log that informs the user of the state of the traffic light.
[ ] Create a changeLight function that accepts the parameter of newLight.
[ ] Inside of changeLight, set up an if statement that checks if lightStates[lightCurrent] includes newLight.
[ ] Inside of this if statement, set lightCurrent to newLight.
[ ] Inside of this if statement, console log the color and state of lightCurrent by checking it in lightLookUp using bracket notation.
[ ] Outside of this if, else console log a message informing the user they cannot go from lightCurrent to newLight.

*/


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
let lightLookUp = {
  red: "green",
  green: "yellow",
  yellow: "red",
};

let currentLight = "red";


//States Map for changing lights
function changeLight(newLight) {
  let possibleNewLight = lightLookUp[currentLight];
    if (newLight == "quit" || newLight == "exit"){
      process.exit()
    } else if (possibleNewLight.includes(newLight)) {
    console.log(
      `${yellow} The light has changed from ${currentLight} to ${newLight} ${white}`
      )
    currentLight = newLight;
  } else {
    console.log(
      `${yellow} The light cannot change from ${currentLight} to ${newLight} ${white}. The light can currently change to ${possibleNewLight}. ${white}`
    )
  }
}

async function respond() {
  // your code here
  // remember to use `await` and `ask`
  let answer;
  while (answer !== "exit" || answer !== "quit") {
    answer = await ask(
      `The traffic light is currently ${currentLight}. What color should the light change to? >`
    );
    changeLight(answer)
  };
  process.exit();
};

respond();