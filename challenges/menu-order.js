menu = {
  burger: 5.00,
  fries: 3.50,
  shake: 1.11,
  salad: 4.25,
  soda: 1.25,
  order: function (orderPlaced) {
    let orderSplit = orderPlaced.split(", ");
    console.log("split order",orderSplit)
    let sum = 0;
    for (item of orderSplit) {
      if (this[item]) {
      console.log("item:", item, " price:", this[item])
      sum += this[item];
      } else {
        console.log(`${item} is not on our menu.`)
      }
    }
    // return sum;
    console.log(sum)
  }
}

menu.order("burger, fries, cat")

