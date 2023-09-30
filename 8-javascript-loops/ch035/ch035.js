// -----CHALLENGE 1-----

// Step 1

let counter = 0;

counter = counter + 1;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;

console.log(counter);

// Step 2

let anotherCounter = 0;

while (anotherCounter < 10) {
  anotherCounter++;
}
console.log(anotherCounter);

// -----CHALLENGE 2-----

// Step 1

let bigNumber = 100;
let smallNumber = 5;

// Step 2

while (bigNumber > smallNumber) {
  bigNumber--;
}

console.log(bigNumber, smallNumber);

// -----CHALLENGE 3-----

// Step 1

let fundsAvailable = 100;
let giftPrice = 15;
let numberOfGiftsPurchased = 0;
let overBudget = false;

// Step 2

while (!overBudget) {
  fundsAvailable = fundsAvailable - giftPrice;
  if (fundsAvailable < giftPrice) {
    overBudget = true;
  }
  numberOfGiftsPurchased++;
}

// Step 3

console.log(fundsAvailable, numberOfGiftsPurchased);

// -----CHALLENGE 4-----

// Step 1

let myArray = [1, 7, 3, 8];
let myIndex = 0;

// Step 2

while (myIndex < myArray.length) {
  console.log(myArray[myIndex]);
  myIndex++;
}

// -----CHALLENGE 5-----

// Step 1

let anotherArray = [86, 75, 30, 9];

// Step 2

for (let index = 0; index < anotherArray.length; index++) {
  console.log(anotherArray[index]);
}

// -----CHALLENGE 6-----

// Step 1

let randomNums = [2, 3, 4, 5, 6, 7, 8, 9, 16, 12];
let overFive = 0;

// Step 1

for (let ind = 0; ind < randomNums.length; ind++) {
  if (randomNums[ind] > 5) {
    overFive++;
  }
}

console.log(overFive);

// -----CHALLENGE 7-----

// Step 1

let favLanguage = "Javascript";
let aTotal = 0;

// Step 2

for (let i = 0; i < favLanguage.length; i++) {
  if (favLanguage[i] === "a") {
    aTotal++;
  }
}

console.log(aTotal);

// -----CHALLENGE 8-----

// Step 1

const messyMessage = [
  6,
  3,
  "j",
  1,
  3,
  "s",
  5,
  9,
  2,
  "b",
  " ",
  3,
  3,
  "i",
  "s",
  7,
  0,
  " ",
  2,
  "f",
  1,
  1,
  1,
  "u",
  "n",
  4,
  "!",
];

let cleanMessage = "";

// Step 2

for (let i = 0; i < messyMessage.length; i++) {
  if (typeof messyMessage[i] !== "number") {
    // === 'string'
    cleanMessage += messyMessage[i];
  }
}

console.log(cleanMessage);
