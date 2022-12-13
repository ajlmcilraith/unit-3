/* 
! Classes

? Classes are templates for crating objects
? they encapsulate data with code
? to declare a class you must uses the keyword class followed by the name of the class
? The name of the class is typically using PascalCasing
* example: UniversityTeacher CollegeStudent

When you create a class the constructor method is invoked first
*/


class Pizza{

  // ? Inside the constructor () you can put parameters
  constructor(diameter, type) {
    this.diameter = diameter;
    this.type = type;
  }

  //   method example
  bake(){
    console.log("The pizza will be ready in 10 mins")
  }
}

// ? Class - like a fuction it must be called/initiated
// ? i.e. you need to create an instance of it

let myPepperoniPizza = new Pizza(14, `pepperoni`);

// ? How do I access the class properties? 
// * use dot notation

console.log(myPepperoniPizza.type)

myPepperoniPizza.bake()

// Create a sausage pizza with a diameter of 10

let mySausagePizza = new Pizza(10, "sausage");

console.log(mySausagePizza.type)

// ! Challenge: Rectangle Class

/* 
Rectangle class should accept two parameters when creating
(height and width)
*/

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  isSquare () {
    return this.height === this.width ? true: false
  }
}

// make a 10 x 5 rectangle 

let rectangle1 = new Rectangle(5, 5)
console.log("Area,", rectangle1.area())
console.log("square? ,", rectangle1.isSquare())

// How could I use this in my project

class Room {

  constructor(name, description, inventory) {
    this.name = name;
    this.description = description;
    this.inventory = inventory;
  }

  rmvInv(item) {
    t
  }
}

let livingRoom = new Room(
  "Living Room", 
  "You have entered the living room, in there you find....", 
  ["knife", "note", "sock"]
  )

  console.log(livingRoom.description)

  let bedroom = new Room(
    "Bedroom", 
    "You entered the bedroom", 
    ["bed", "table", "lamp", "desk"]
  )

// To make requirements, have a state check that checks an object/array assigned to the player which contains the relevant data

//maybe you have a class called person with an inventory method?

class Player {

  constructor(inventory) {
    this.inventory = inventory;
  }
  addItem(item){
    this.inventory.push(item)
    return this.inventory
  }
}

let player1 = new Player([])

console.log("add inventory", player1.addItem("knife"))

// * keep like things together in the code

// class properties can contain ternaries and conditionals that depend on other properties

