// Create the `series` variable
var series = [0, 1];


while (series.length < 10) {
  let second = series.pop();
  let first = series.pop();
  let third = second + first;
  series.push(first);
  series.push(second);
  series.push(third);
}

// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34
