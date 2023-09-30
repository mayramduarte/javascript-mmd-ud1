// -----CHALLENGE 1-----

// STEP 1

// This is a comment that won't be executed like regular Javascript code
// STEP 2

/* 
  This is a multiline comment that also won't be 
  executed like 
	regular Javascript code!!! 
  */

// -----CHALLENGE 2-----

// STEP 1
const eyeColor = "brown";
let hairColor = "brown";
console.log(eyeColor, hairColor);

// STEP 2
hairColor = "blond";
console.log(hairColor);

// eyeColor = 'green'
console.log(eyeColor);

// -----CHALLENGE 3-----

// STEP 1
let fName = "Mayra";
let lName = "Duarte";
let favShow = "Seinfeld";

console.log(fName, lName, favShow);

// STEP 2
let greeting;
greeting = "Hello";

console.log(greeting + ", " + fName + " " + lName + "!");

// STEP 3 (Bonus Step)

let fancyGreeting;
fancyGreeting = "Good evening to you";

console.log(`${fancyGreeting}, ${fName} ${lName}!`);

// -----CHALLENGE 4-----

// STEP 1
let favNumber = 22;
let randomNumber = 10;

// STEP 2
let sum = favNumber + randomNumber;
let product = favNumber * randomNumber;
let difference = favNumber - randomNumber;

console.log(sum, product, difference);

// STEP 3 (Bonus Step)
let remainder = favNumber % randomNumber;
console.log(remainder);

// -----CHALLENGE 5-----

// STEP 1
const favSnacks = ["salgado", "pão", "bolo"];

console.log(favSnacks);

console.log(favSnacks.length);

console.log(favSnacks[1]);

// STEP 2
const favAnimals = ["dog", "lion", "wolf", "duck"];

console.log(favAnimals);

console.log(favAnimals.length);

console.log(favAnimals[0]);

// STEP 3 (Bonus Step)

/* favAnimals[favAnimals.length + 1] = 'bear';
 	console.log(favAnimals);

	favAnimals[favAnimals.length + 1] = 'bird';
 	console.log(favAnimals);
 */

console.log(favAnimals[favAnimals.length - 1]);

// -----CHALLENGE 6-----

// STEP 1
const person = {
  fName: "Mayra",
};

console.log(person);

// STEP 2

person.favColor = "blue";

console.log(person.favColor);

// STEP 3
person["likes to code"] = false;

console.log(person["likes to code"]);

person["likes to code"] = true;

console.log(person["likes to code"]);

// STEP 4 (Bonus Step)
person.siblings = {
  brothers: 1,
  sisters: 0,
};

console.log(person.siblings.brothers);
console.log(person.siblings.sisters);
console.log(person);
