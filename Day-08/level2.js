// Exercises: Level 2
//1 Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let winner;
let max = 0;
for (const key in users) {
  if (users[key].skills.length > max) {
    max = users[key].skills.length;
    winner = key;
  }
}
console.log(winner);

//2 Count logged in users, count users having greater than equal to 50 points from the following object.
let loginCount = 0;
let pointsCount = [];
for (const key in users) {
  if (users[key].isLoggedIn) {
    loginCount++;
  }
  if (users[key].points >= 50) {
    pointsCount.push(key);
  }
}
console.log(`The no of users who are logged in are ${loginCount},
and The users which have greater than and equal to 50 points are ${pointsCount}`);

//3 Find people who are MERN stack developer from the users object
let mernStackDev = [];
for (const key in users) {
  if (users[key].skills.includes("MongoDB", "Express", "React", "Node")) {
    mernStackDev.push(key);
  }
}
console.log(`The mern stack developers are ${mernStackDev}`)

//4 Set your name in the users object without modifying the original users object
let usersNewObj=Object.assign({},users)
console.log(usersNewObj)
usersNewObj.name='nutan'
console.log(usersNewObj)

//5 Get all keys or properties of users object
const keys=Object.keys(users)
console.log(keys)

//6 Get all the values of users object
const values=Object.values(users)
console.log(values)

//7 Use the countries object to print a country name, capital, populations and languages.

//you can find entire countries_data list at: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries_data.js

const countries_data = [
	{
			"name": "Afghanistan",
			"capital": "Kabul",
			"languages": [
					"Pashto",
					"Uzbek",
					"Turkmen"
			],
			"population": 40218234,
			"flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
			"region": "Asia",
			"area": 652230
	},
	{
			"name": "Åland Islands",
			"capital": "Mariehamn",
			"languages": [
					"Swedish"
			],
			"population": 28875,
			"flag": "https://flagcdn.com/ax.svg",
			"region": "Europe",
			"area": 1580
	},
	{
			"name": "Albania",
			"capital": "Tirana",
			"languages": [
					"Albanian"
			],
			"population": 2837743,
			"flag": "https://flagcdn.com/al.svg",
			"region": "Europe",
			"area": 28748
	},
	{
			"name": "Algeria",
			"capital": "Algiers",
			"languages": [
					"Arabic"
			],
			"population": 43851043,
			"flag": "https://flagcdn.com/dz.svg",
			"region": "Africa",
			"area": 2381741
	}
]

let name=[];
let capital=[]
let population=[]
let languages=[]
for(const keys of countries_data){
name.push(keys.name)
capital.push(keys.capital)
population.push(keys.population)
languages.push(keys.languages)

}
console.log(`names: ${name}\ncapital: ${capital}\npopulation: ${population}\nlanguages: ${languages}`)
