// ## Exercise4

// from Exercise1
// Instead of use if...else, can you use **ternary operator**.

const dayNumber = 6;

let whatDay =
  dayNumber === 0
    ? "Sunday"
    : dayNumber === 6
    ? "Saturday"
    : "Invalid day number";

console.log(whatDay);
