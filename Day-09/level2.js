// Exercises: Level 2
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: "" },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// countries list form countries.js file

//1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let totalProductPrice = products
  .map((product) => {
    return product.price;
  })
  .filter((price) => {
    return price > 0;
  })
  .reduce((a, b) => a + b);
console.log(totalProductPrice);

// 2  Find the sum of price of products using only reduce reduce(callback))
let totalPriceByReduce=products.reduce((acc,crr)=>{ return typeof crr.price!=='string'?acc+=crr.price:acc;
},0)
console.log(totalPriceByReduce)
//3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
let categorizeCountries=countries.filter((country)=>{
    if(country.toLocaleLowerCase().includes('land')||country.toLocaleLowerCase().includes('island')||country.toLocaleLowerCase().includes('stan')){
        return country
    }
})
console.log(categorizeCountries)

// from question no 4-6 use contries.js file countries array
//4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function letters(arr){
    let alphaIndex=0
    let alphaChar='ABCDEFGHIJKLMNOPQRSTUVEWXYZ'

    let finalObj=[]
    while(alphaIndex!==alphaChar.length){
      let startsWith=arr.filter((obj)=>{ return obj.startsWith(alphaChar[alphaIndex])})
        finalObj.push({'letter':alphaChar[alphaIndex] ,'count':startsWith.length +'times'})

alphaIndex++
   
    }
    return finalObj
}
console.log(letters(countries))

// or
const occurence= countries.reduce((v1,v2)=>{
    const startLetter = v2[0];
        v1[startLetter] = (v1[startLetter] || 0) + 1;
        return v1;  
        },{})
    
    console.log(occurence)


//5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

let getFirstTenCountries = arr => arr.filter(c => arr.indexOf(c)<10);
console.log(getFirstTenCountries(countries))

//6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

let lastTenContries=arr=>arr.filter(c=>arr.indexOf(c)>arr.length-11)
console.log(lastTenContries(countries))




