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

//1 Explain the difference between forEach, map, filter, and reduce.
      // forEach
      // forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.
      // map
      // map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
      // filter
      // Filter: Filter out items which full fill filtering conditions and return a new array.
      // reduce
      // reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

      // 3 Use forEach to console.log each country in the countries array.
      countries.forEach((country) => {
        console.log(country);
      });

      // 4 Use forEach to console.log each name in the names array.
      names.forEach((name) => {
        console.log(name);
      });

      //5 Use forEach to console.log each number in the numbers array.
      numbers.forEach((num) => {
        console.log(num);
      });

      //  6 Use map to create a new array by changing each country to uppercase in the countries array.

      let uppercaseCountries = countries.map((a) => a.toUpperCase());
      console.log(uppercaseCountries);

      //  7 Use map to create an array of countries length from countries array.

      let countriesLength = countries.map((a) => a.length);
      console.log(countriesLength);
      
      //8 Use map to create a new array by changing each number to square in the numbers array
      let square=numbers.map((num)=>{
return num**2
      })
      console.log(square)

      //9 Use map to change to each name to uppercase in the names array
      let uppercaseNames = names.map((name) => name.toUpperCase());
      console.log(uppercaseNames);

    // 10  Use map to map the products array to its corresponding prices.
    let productPrices=products.map((product)=>{
        return product.price
    })
    console.log(productPrices)
    // for +ve prices in terms of array
   let positivePrice= productPrices.filter(price=>{
      return  price>0
    })
    console.log(positivePrice)

    // 11 Use filter to filter out countries containing land.
    let land=countries.filter((country)=>{
        return country.includes('land')
    })
    console.log(land)

    // 12 Use filter to filter out countries having six character.
    let countriesWith6Chars=countries.filter((country)=>{
        return country.length>6
    })
    console.log(countriesWith6Chars)

    // 13 Use filter to filter out countries containing six letters and more in the country array.
    let countriesWith6CharsMore=countries.filter((country)=>{
        return country.length>=6
    })
    console.log(countriesWith6CharsMore)

    // 15 Use filter to filter out only prices with values.
    let positiveValue=products.filter((b)=>{
    return b.price>0
})
console.log(positiveValue)

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

// 19 Explain the difference between some and every
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
