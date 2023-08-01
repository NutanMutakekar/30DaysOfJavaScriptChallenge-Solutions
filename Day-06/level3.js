// Exercises: Level 3
// link to countries list- https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js
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
