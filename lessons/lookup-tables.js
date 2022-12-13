// create a function called getStateAbbreviation
// it will take a single parameter called state
// function will return the abbreviation

function getStateAbbreviation(state) {
  const stateNames = {
    Alabama: "AL",
    Alaska: "AK",
    Arizona: "AZ",
    Arkansas: "AR"
  };

  return stateNames[state]
}

console.log(getStateAbbreviation("Alabama"))

// fun with functions - spread operator (...)

function getMulitpleStateAbbreviations(...states){
  console.log(states)
  let stateAbbreviations = states.map(state=>getStateAbbreviation(state))

  console.log(stateAbbreviations);
  return stateAbbreviations.join(", ");
}

console.log(getMulitpleStateAbbreviations("Alabama", "Arkansas"))

//Elena had a lookup table called commands
// movement, drop, unlock, solve, etc ---> these go to possible actions

let commands = {
  movement: ["move", "enter", "walk", "go"],
  pickup: ["pick", "grab", "take"],
  drop: ["drop", "discard"],
  examine: ["read", "look", "examine", "inspect", "study"],
  talkTo: ["ask", "speak", "question", "talk"],
  help: ["help"],
  inventory: ["inventory"],
  unlock: ["unlock", "open"],
  solve: ["solve"],
  room: ["room"],
};

