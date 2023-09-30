// -----CHALLENGE 1-----

// STEP 1
const favNumber = 22;
const comp1 = favNumber < 22;
const comp2 = favNumber > 4;
const comp3 = favNumber >= 21;
const comp4 = favNumber <= 8;

console.log(comp1, comp2, comp3, comp4);
// STEP 2
const name = "Mayra";
let comp5, comp6, comp7, comp8;

// STEP 3
comp5 = "5" == 5; // true
comp6 = name === "Maria"; // false
comp7 = "cat" != 6; // true
comp8 = "8" !== 8; // true

// STEP 4
console.log(comp5, comp6, comp7, comp8);

// -----CHALLENGE 2-----

// VARIABLE GLOSSARY
const superManIsTheBestSuperHero = true; // 🦸
const batManIsTheBestSuperHero = false; // literally, no super powers 🙄
const gameOfThronesSeason8WasTerrible = true; // like really true
const androidIsSuperiorToApple = false; // come at me 🤷
const greatTVShow = "The Office";
const notSoGreatTVShow = "How I Met Your Mother";
const bestPetToOwn = "dog";
const notBestPetToOwn = "cat"; // I love all pets. Just cats a bit less than dogs ... sorry 😬😅
const bestTypeOfFood = "Hispanic"; // 🌮🌮🌮
const bestMusic = undefined; // always different for me 💁

// STEP 1
const value1 = superManIsTheBestSuperHero && gameOfThronesSeason8WasTerrible; //truthy + truthy; right truthy   = true
const value2 = gameOfThronesSeason8WasTerrible && notSoGreatTVShow; // truthy + truthy = true; right truthy - 'How I Met Your Mother'

// STEP 2
const value3 = batManIsTheBestSuperHero || androidIsSuperiorToApple; // falsy + falsy; right falsy = false
const value4 = bestMusic || bestPetToOwn; //  falsy + truthy = true; first truthy - 'dog'

// STEP 3
const value5 = !bestMusic; // undefined - falsy > not falsy> true
const value6 = !bestTypeOfFood; // truthy> not truthy> false

console.log(value1, value2, value3, value4, value5, value6);

// STEP 4 (Bonus Step)
const guest = {};
guest.name = "Paul";
guest.age = 32;
guest["has identification"] = true;
guest["identification is real"] = true;
guest["face matches identification"] = true;

console.log(guest);

/* let nameToBeAddedToTheGuestLis;
	if (guest.age >= 21 && guest['has identification'] == true && guest['identification is real'] == true && guest['face matches identification'] == true){
   
	nameToBeAddedToTheGuestLis = guest.name;
  }
  
 else {
  nameToBeAddedToTheGuestLis = `Sorry, ${guest.name} you're not getting into the event.` 
 }

	*/

// Here is the kicker, you should be able to do this using only a combination of Comparison & Logical Operators

// Explanation at 25:18

const nameToBeAddedToTheGuestLis =
  (guest.age >= 21 &&
    guest["has identification"] &&
    guest["identification is real"] &&
    guest["face matches identification"] &&
    guest.name) ||
  `Sorry, ${guest.name} you're not getting into the event.`;

console.log(nameToBeAddedToTheGuestLis);

// -----CHALLENGE 3-----

// STEP 1
const num = 10;

// STEP 2
if (num > 0) {
  console.log(`it's positive`);
}
if (num < 0) {
  console.log(`it's negative`);
}
if (num == 0) {
  console.log(`it's zero`);
}

// STEP 3
// Refactor above

const num1 = -10;

if (num1 > 0) {
  console.log(`it's positive`);
} else if (num1 < 0) {
  console.log(`it's negative`);
} else if (num1 == 0) {
  console.log(`it's zero`);
}

// STEP 4
// Refactor above

const num2 = 0;

if (num1 > 0) {
  console.log(`it's positive`);
} else if (num2 < 0) {
  console.log(`it's negative`);
} else {
  console.log(`it's zero`);
}

// -----CHALLENGE 4-----

// STEP 1
const temperature = 84;
let kindOfDay;

// STEP 2

/*
	if (temperature > 98) {
	kindOfDay = 'super hot';
	console.log(`I'm staying inside next to the AC`);
  }
	else if (temperature > 84 && temperature < 99 ) {
	kindOfDay = 'a little warm';
	console.log(`I'll head out for a bit, but I'm wearing shorts`);
  }
	else if (temperature > 69 && temperature < 85) {
	kindOfDay = 'perfect';
	console.log(`It's perfect outside. I think I'll go to the park`);
  }
	else if (temperature > 54 && temperature < 70) {
	kindOfDay = 'chilly';
	console.log(`I'd better bring a jacket`);
  }
	else {
	kindOfDay = 'freezing';
	console.log(`Heck no! I'm staying inside where it's warm`);
  }
	
	if (temperature !== undefined)
    {
    console.log(`Looks like it's going to be ${kindOfDay} today"`);  
    }
	*/

if (temperature > 98) {
  kindOfDay = "super hot";
  console.log(`I'm staying inside next to the AC`);
} else if (temperature > 84) {
  kindOfDay = "a little warm";
  console.log(`I'll head out for a bit, but I'm wearing shorts`);
} else if (temperature > 69) {
  kindOfDay = "perfect";
  console.log(`It's perfect outside. I think I'll go to the park`);
} else if (temperature > 54) {
  kindOfDay = "chilly";
  console.log(`I'd better bring a jacket`);
} else {
  kindOfDay = "freezing";
  console.log(`Heck no! I'm staying inside where it's warm`);
}

if (kindOfDay) {
  console.log(`Looks like it's going to be ${kindOfDay} today`);
}

// -----CHALLENGE 5 (Bonus Challenge 😮) -----

const value7 = true;
const value8 = false;
const value9 = "6";
const value10 = "cat";
const value11 = 0;

// -----Uncomment The Below Lines Of Code-----

if (value7) {
  // if(value7 === true)

  console.log("a");
}

if (!value8) {
  // if (value8 == false)

  console.log("b");
}

if (value9 == 6) {
  // if (value9 === '6' || value9 === 6)

  console.log("c");
}

if (value10) {
  // if (value10 != undefined)

  console.log("d");
}

if (!value11) {
  // if(value11 === undefined || value11 == "" || value11 === 0
  console.log("e");
}
