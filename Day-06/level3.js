// Exercises: Level 3
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// 1 Copy countries array(Avoid mutation)
let countries_copy = []
for(const country of countries){
    countries_copy.push(country)
}
console.log(countries_copy)
//2 Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries =countries_copy.sort();
console.log(sortedCountries)

//3 Sort the webTechs array and mernStack array
let sorted_WebTechs = webTechs.sort();
console.log(sorted_WebTechs)
let sorted_mernStack = mernStack.sort();
console.log(sorted_mernStack)

//4 Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesWithLand=[];
for(const country of countries_copy){
    if(country.toLowerCase().includes("land"))
countriesWithLand.push(country)
}
console.log(countriesWithLand)
//5 Find the country containing the hightest number of characters in the countries array
let lengthArr=[];
for(const country of countries_copy){
    lengthArr.push(country.length)
}
console.log(lengthArr)

let highestLength=Math.max.apply(null,lengthArr)
console.log(countries_copy[lengthArr.indexOf(highestLength)])//Central African Republic

// or
let maxLength=0;
let maxLenCountry;
for(const country of countries_copy){
if(country.length>maxLength){
    maxLength=country.length
    maxLenCountry=country
}
}
console.log(maxLenCountry)//Central African Republic

//6 Extract all the countries contain the word 'land' from the countries array and print it as array
// same as 4

//7 Extract all the countries containing only four characters from the countries array and print it as array
let countryWith4Char=[];
for(const country of countries_copy){
    if(country.length===4){
        countryWith4Char.push(country)
    }
}
console.log(countryWith4Char)

//8 Extract all the countries containing two or more words from the countries array and print it as array
let countryWith2orMoreWords=[];
for(const country of countries_copy){
    if(country.split(" ").length>1){
        countryWith2orMoreWords.push(country)
    }
}
console.log(countryWith2orMoreWords)


//9 Reverse the countries array and capitalize each country and stored it as an array
let reverseAndCapitalizeCountries=[];
for(i=countries_copy.length-1;i>=0;i--){
reverseAndCapitalizeCountries.push(countries_copy[i].toUpperCase())
}
console.log(reverseAndCapitalizeCountries)

// or
let reversedCountries = countries.reverse();
let capReverseCountries = [];

for(const country of reversedCountries) {
   capReverseCountries.push(country.toUpperCase());   
} console.log(capReverseCountries);
