// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice
// - Implement the (basic) rules of craps:
//   - If the total of the two dice is 7 or 11, the player wins
//   - If the total of the two dice is 2, 3, or 12, the player loses
//   - If the total is anything else, the "point" is set, e.g. "the point is 6"

// Write the recipe (algorithm) in the comments. Write the code.

//Store the total
let die1 = getRandomInt(10)
console.log(`Roll 1 is ${die1}`)

let die2 = getRandomInt(10)
console.log(`Roll 2 is ${die2}`)

let total = die1 + die2

// Say you win if total is 7 or 11
if(total == 7 || total == 11) {
  console.log(`The total is ${total}. YOU WIN!!!!`)
}

//Say you lose if total is 2, 3, or 12
else if(total == 2 || total == 3 || total == 12) {
  console.log(`The total is ${total}. YOU LOSE :(`)
}

//Say the point is based on whatever it is
else{
  console.log(`The point is ${total}`)
}