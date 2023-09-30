// -----CHALLENGE 1-----

// Step 1

let greetingPt1 = "Hello";

let greetingPt2 = "World!";

greetingPt1 += " " + greetingPt2;

console.log(greetingPt1);

// Step 2

function greeting() {
  let greetingPt3 = "Hello";
  let greetingPt4 = "World!";
  console.log(greetingPt3 + " " + greetingPt4);
}

greeting();

// -----CHALLENGE 2-----

// Step 1

function createPartnerGreeting() {
  let partnerName = "Mayra";
  return `Hey, ${partnerName}. It's great to work with you on these challenges!`;
}

let partnerGreeting = createPartnerGreeting();
console.log(partnerGreeting);

// Step 2

function createPartnerGreeting2(partnerName2) {
  return `Hey, ${partnerName2}. It's great to work with you on these challenges!`;
}

let partnerGreeting2 = createPartnerGreeting2("John");
console.log(partnerGreeting2);

// -----CHALLENGE 3-----

function addTwo(number1, number2) {
  return number1 + number2;
}

//Uncomment the line below to check your work!

console.log(addTwo(10, 20)); // --> 30
console.log(addTwo(16, 199)); // --> 215

// -----CHALLENGE 4-----

function arraySum(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    //sum = sum + numArray[i];
    sum += numArray[i];
  }
  return sum;
}

// console.log(arraySum([2, 3, 4]))

//Uncomment the line below to check your work!
console.log(arraySum([1, 7, 2, 8, 4, 5, 9, 2, 6, 8])); // --> 52
console.log(arraySum([1, 3, 14, 10000])); // --> 10018

// -----CHALLENGE 5-----

function arraySumEven(numEven) {
  let sumEven = 0;
  for (let i = 0; i < numEven.length; i++) {
    if (numEven[i] % 2 === 0) {
      sumEven += numEven[i];
    }
  }
  return sumEven;
}

//Uncomment the line below to check your work!
console.log(arraySumEven([1, 7, 2, 8, 4, 5, 9, 2, 6, 8])); //--> 30
console.log(arraySumEven([1, 3, 27, 3, 5, 9])); // --> 0

// -----CHALLENGE 6-----

function stringCreator(array, string) {
  let word = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== string) {
      word += array[i];
    }
  }
  return word;
}

//Uncomment the line below to check your work!

console.log(
  stringCreator(
    [
      "C",
      "q",
      "q",
      "o",
      "d",
      "q",
      "e",
      "q",
      "s",
      "m",
      "q",
      "i",
      "q",
      "t",
      "h",
      "q",
      "q",
    ],
    "q"
  )
); // --> Codesmith
console.log(
  stringCreator(
    [
      "g",
      "g",
      "J",
      "S",
      "g",
      "B",
      " ",
      "g",
      "i",
      "s",
      "g",
      "g",
      " ",
      "s",
      "g",
      "u",
      "p",
      "e",
      "g",
      "r",
      "g",
      "g",
      " ",
      "a",
      "g",
      "w",
      "e",
      "s",
      "g",
      "o",
      "g",
      "m",
      "e",
      "!",
      "g",
      "g",
    ],
    "g"
  )
); // --> JSB is super awesome!

// -----CHALLENGE 7-----

const lengthChecker = function (string1, num) {
  if (string1.length >= num) {
    return true;
  }
  return false;
};

//Uncomment the line below to check your work!

console.log(lengthChecker("Codesmith", 12)); // --> false
console.log(lengthChecker("Javascript", 10)); // --> true

// -----CHALLENGE 8-----

// HARD! Makes you think!

const valueChecker = function (object, string2) {
  if (object[string2]) {
    return object[string2];
  }
  return `Sorry,"${string2}" does not exist on the object.`;
};

//Uncomment the line below to check your work!
const person1 = {
  "first name": "Phillip",
  "last name": "Troutman",
  favFood: "ice cream",
};
console.log(valueChecker(person1, "last name")); // --> "Troutman"
console.log(valueChecker(person1, "age")); // --> 'Sorry, "age" does not exist on the object'

// -----CHALLENGE 9-----

// Step 1

// HARD!

const findWaldo = function (array2) {
  let waldoCount = 0;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] === "Waldo") {
      waldoCount++;
    }
  }

  if (waldoCount > 0) {
    return `I found Waldo ${waldoCount} time(s)!`;
  } else {
    return `Where's Waldo?!`;
  }
};

//Uncomment the line below to check your work!
console.log(findWaldo(["Camera", "Waldo", "Eunie", "Waldo", "Phillip"])); // --> "I found Waldo 2 time(s)""
console.log(findWaldo(["Camera", "Eunie", "Phillip", "Ryan", "Kat"])); // --> "Where's Waldo?!"

// Step 2

// to-do - arrow fucntion
