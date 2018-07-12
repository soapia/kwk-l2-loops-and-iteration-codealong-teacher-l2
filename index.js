// Code your solutions in this file
function printBadges(namesArray) {
  for (let i = 0; i < namesArray.length; i++) {
    console.log(`Welcome ${namesArray[i]}! You are employee #${i + 1}.`) 
  }
  return namesArray
}

function tailsNeverFails() {
  let flip = Math.random()
  let flips = 0
  while (flip >= 0.5) {
  ++flips
  flip = Math.random()
  }
  return `You got ${flips} tails in a row!`
}

// printBadges(['Ada', 'Brendan', 'Ali'])
