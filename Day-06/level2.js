// Day-06 Exercises: Level 2

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

//1 Develop a small script which generate any number of characters random id:
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12356789";
let anyNum = Math.floor(Math.random() * alphabet.length);
let randomId = [];
for (i = 0; i <= anyNum; i++) {
  randomId.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
}
console.log(randomId.join(""));

//2 Write a script which generates a random hexadecimal number.
let randomId8 = Math.floor(Math.random() * 16777215).toString(16);
console.log("#" + randomId8);

//3 Write a script which generates a random rgb color number.
let randomIdrgb1 = Math.floor(Math.random() * 100) + 100;
let randomIdrgb2 = Math.floor(Math.random() * 100) + 100;
let randomIdrgb3 = Math.floor(Math.random() * 100) + 100;

console.log(`rgb( ${randomIdrgb1}, ${randomIdrgb2}, ${randomIdrgb3} )`);

//4 Using the above countries array, create the following new array.
let newARR = [];
for (i = 0; i < countries.length; i++) {
  newARR.push(countries[i].toUpperCase());
}
console.log(newARR);

//5 Using the above countries array, create an array for countries length'.
let countryLength = [];
for (i = 0; i < countries.length; i++) {
  countryLength.push(countries[i].length);
}
console.log(countryLength);

//6 Use the countries array to create the following array of arrays:
let arrOfArrs = [];
for (i = 0; i < countries.length; i++) {
  arrOfArrs.push([
    countries[i],
    countries[i].toUpperCase().slice(0, 3),
    countries[i].length,
  ]);
}
console.log(arrOfArrs);

//7 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countryOfLand = [];
let remainingCountries = [];
for (i = 0; i < countries.length; i++) {
  let land = countries[i].toLowerCase().includes("land");
  if (land) {
    countryOfLand.push(countries[i]);
  } else {
    remainingCountries.push(countries[i]);
  }
}
console.log("contries containing land" +" "+ countryOfLand);
console.log("contries without containing land"+" "+remainingCountries);

//8 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countryEndsWithIa = [];
let remainingCountries1 = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes("ia")) {
    countryEndsWithIa.push(countries[i]);
  } else {
    remainingCountries1.push(countries[i]);
  }
}
console.log(`countries ending with ia ${countryEndsWithIa}`);
console.log(`countries without ending with ia ${remainingCountries1}`);

//9 Using the above countries array, find the country containing the biggest number of characters.
let countriesLength = [];
for (i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);

let highestLength;
highestLength = Math.max.apply(null, countriesLength);
console.log(countries[countriesLength.indexOf(highestLength)]);

//10 Using the above countries array, find the country containing only 5 characters.
let countriesWith5Char = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    countriesWith5Char.push(countries[i]);
  }
}
console.log(countriesWith5Char);

//11 Find the longest word in the webTechs array
let lengthOfArr = [];
for (i = 0; i < webTechs.length; i++) {
  lengthOfArr.push(webTechs[i].length);
}
console.log(lengthOfArr);

let highestNum = Math.max.apply(null, lengthOfArr);
console.log(webTechs[lengthOfArr.indexOf(highestNum)]);

//12 Use the webTechs array to create the following array of arrays:
let arr_length = [];
for (i = 0; i < webTechs.length; i++) {
  arr_length.push([webTechs[i], webTechs[i].length]);
}
console.log(arr_length);

//13 An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acronym = "";
for (i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i].slice(0, 1);
}
console.log(acronym);

//14 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// for of loop
let printItemsForL = [];
for (i = 0; i < webTechs.length; i++) {
  printItemsForL.push(webTechs[i]);
}
console.log(printItemsForL);

// for loop
let printItemsForOfL = [];
for (item of webTechs) {
  printItemsForOfL.push(item);
}
console.log(printItemsForOfL);

//15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ["banana", "orange", "mango", "lemon"];
// forloop
let reverseArrForL = [];
for (i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
// for of loop
let reverseArrForOf = [];
for (item of fruits) {
  reverseArrForOf.unshift(item);
}
console.log(reverseArrForOf);

//16 Print all the elements of array as shown below.

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let joinArr = [];
for (i = 0; i < fullStack.length; i++) {
  joinArr.push(fullStack[i]);
}
console.log(joinArr.join(""));
