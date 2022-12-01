let dog = {
  name: "Skillet",
  color: "Tan",
  bark: function(){
    console.log(`${this.name} just barked`)
  }
}

// ? How do we access the name using dot notation

console.log(dog.name)

dog.bark()

// ? What if we wanted to console log 
// ?    "Sparky just barked"

// * when referencing properties inside an object, use 'this.key' 

 /* 
 ? You have a mechanic's shop called JiffyLoop
 ? The services you offer are the following 
    * tire rotation: $45
    * oil change: $35
    * wiper blades: $15 

? Create an object with those properties 
? Create a key balue pair inside of the jiffyLoop Object 
? Create a key called order and it will have a function associated with it
? it will have a parameter called orderPlaced   
 */

let jiffyLoop = {
  "tire rotation": 45,
  "oil change": 35,
  "wiper blades": 15,
  order: function (orderPlaced) {
    let orderSplit = orderPlaced.split(", ");
    console.log("split order",orderSplit)
    let total= 0;
    for (item of orderSplit) {
      console.log("item:", item, " price:", this[item])
      total += this[item];
    }
    this.companyOrders.push(total)
    return total;
  },
  companyOrders: []
}

// ? How would I reference a tire rotation in the console?

console.log(jiffyLoop["tire rotation"])


// ? Call the order key of jiffyLoop and pass it a comma separated value
// * example "tire rotation, oil change"

let order1 = jiffyLoop.order("tire rotation, oil change")
let order2 = jiffyLoop.order("tire rotation, wiper blades")

console.log("order1 total:", order1, "order2 total:", order2)

console.log("company orders", jiffyLoop.companyOrders)
