let alice = {
  name: `Alice McIlraith`,
  age: 26,
  graduatedHSYear: 2014,
  pets: true,
  petNames: ["Skillet"],
  mostRecentMovieWatched: "Hercules",
  carsOwned: [{make: "Chevrolet", model: "1987 Astro Van"}],
  favoriteArtist: "Su Lee"
}

let alex = {
  name: `Alexander Loring`,
  age: 25,
  graduatedHSYear: 2016,
  pets: true,
  petNames: ["Tarzan"],
  mostRecentMovieWatched: "Battle of Los Angeles",
  carsOwned: [{ make: "Volkswagen", model: "Jetta"}, {make: "Toyota", model: "Prius"}],
  favoriteArtist: "Kevin Penkin"
}

let marcel = {
  name: `Marcel Prisacari`,
  age: 33,
  graduatedHSYear: 2005,
  pets: false,
  petNames: null,
  mostRecentMovieWatched: "Luckiest Girl Alive",
  carsOwned: [
    { make: "Vokswagen", model: "Passat"},
    { make: "Ford", model: "F-150"},
    { make: "Toyota", model: "Camry"}
  ],
  favoriteArtist: "Adele"
}

/* 


Students will then create an array with everyone's info from the variables they created. 

For the final part -  console log a sentence from the newly created array. 
"There were  3 . people in our group. Their names were  Rob , Ted,  Fred.  Rob graduated in 1998. Ted's favorite singer is Michael jackson. And Fred does not have any pets."

*/
let students = [alice, alex, marcel];
// console.table(students)



console.log(
  `\nThere were ${students.length} people in our group. ` +
  `Their names were ${students[0].name}, ${students[1].name}, and ${students[2].name}. ` + 
  `${students[0].name} graduated in ${students[0].graduatedHSYear}. ` +
  `${students[1].name}'s favorite singer is ${students[1].favoriteArtist}. And ${students[2].name} doesn't have any pets.`
)


function petSentence(array, index) {
  let sentence = ""
  array[index].pets ? sentence += `${array[index].name.split(" ")[0]} has a pet named ${array[index].petNames[0]}.` 
  : sentence += `${array[index].name.split(" ")[0]} doesn't have any pets.`;
  return sentence;
}

function groupParagraphLog(array, index1=0, index2=1, index3=2) {
  console.log(
  `\nThere were ${array.length} people in our group. ` +
  `Their names were ${array[index1].name}, ${array[index2].name}, and ${array[index3].name}. ` + 
  `${array[index1].name.split(" ")[0]} graduated in ${array[index1].graduatedHSYear}. ` +
  `${array[index2].name.split(" ")[0]}'s favorite singer is ${array[index2].favoriteArtist}. And ${petSentence(array, index3)} `
  )
}

groupParagraphLog(students)
groupParagraphLog(students, 2, 1, 0)

// for(i in students) { 
// console.log(petSentence(students, i))}

// console.log(
//   `\nThere were ${students.length} people in our group. ` +
//   `Their names were ${students[0].name}, ${students[1].name}, and ${students[2].name}. ` + 
//   `${students[0].name} graduated in ${students[0].graduatedHSYear}. ` +
//   `${students[1].name}'s favorite singer is ${students[1].favoriteArtist}. And ${petSentence(students, 2)}`
// )


