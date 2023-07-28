// day-09 Higher order function 
// level 1   
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
let strArr=['nitu','attu','yashu','renu',24,56]

let getStringLists= (arr)=>{
    let nn=arr.filter((b)=>{
        return typeof b=='string'
    })
    return nn
}
console.log(getStringLists(['nutan','attu','yashu','renu',24,64]))

// 17 Use reduce to sum all the numbers in the numbers array.
let sum=numbers.reduce((acc,cur)=>{
    return acc+cur 
})
console.log(sum)

//  18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let concatinatedCountries=countries.reduce((acc,country,index)=>{
    if(index===countries.length-1){
return acc + 'and' + country
    }else{
        return acc +" "+ country+" "
    }

},'ethopia')
console.log(concatinatedCountries +'  are European contries')

// 9 Explain the difference between some and every
// some
// some: Check if some of the elements are similar in one aspect. It returns boolean

let some=countries.some((country)=>{
    return country.includes('land')
})
console.log(some)// true


// every
// every: Check if all the elements are similar in one aspect. It returns boolean
let every=countries.every((country)=>{
    return country.includes('land')
})
console.log(every)//false


// 20 Use some to check if some names' length greater than seven in names array

let lengthgreaterthan7=countries.some((country)=>{
    return countries.length>7
})
console.log(lengthgreaterthan7)

//21 Use every to check if all the countries contain the word land
let containgLand=countries.all((country)=>{
    return country.includes('land')
})
console.log(containgLand)

//22 Explain the difference between find and findIndex.
// find: Return the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18,6]
const age = ages.find((age) => age < 20)

console.log(age)//18

// findIndex
// findIndex: Return the position of the first element which satisfies the condition

const name = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const Age = [24, 22, 25, 32, 35, 18,6]

const result = name.findIndex((name) => name.length > 7)
console.log(result) // 0

const findIndexOfage = Age.findIndex((age) => age < 20)
console.log(findIndexOfage) // 5

//23 Use find to find the first country containing only six letters in the countries array
let firstCountry6chars=countries.find((country)=>{
    return country.length===6
})
console.log( firstCountry6chars)

// 24 Use findIndex to find the position of the first country containing only six letters in the countries array
let firstIndexPosCountry6chars=countries.findIndex((country)=>{
    return country.length===6
})
console.log( firstIndexPosCountry6chars)

//25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findIndexPoscountry=countries.findIndex((country)=>country.includes('Norway'))
console.log(findIndexPoscountry)
//26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findIndexPoscountry2=countries.findIndex((country)=>country.includes('Russia'))
console.log(findIndexPoscountry2)
