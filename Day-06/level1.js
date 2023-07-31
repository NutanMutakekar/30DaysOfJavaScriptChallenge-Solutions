//Day-06 level1 exercises
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
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
//1 Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(i=0;i<=10;i++){
//     console.log(i)
// }
// let r=0;
// while(r<=10){
//     console.log(r)
//     r++
// }

// let m=0;
// do{
//     console.log(m)
//     m++
// }while(m<=10)

//2 Iterate 10 to 0 using for loop, do the same using while and do while loop
// for(i=10;i>=0;i--){
//     console.log(i)
// }
// let a=10;
// while(a>=0){
//     console.log(a) 
//     a--
// }
// let b=10;
// do{
//     console.log(b) 
//     b--
// }while(b>=0)

//3 Iterate 0 to n using for loop
let n=10
for(i=0;i<=n;i++){
    console.log(i)
}

//4 Write a loop that makes the following pattern using console.log():
let height=7
for(i=0;i<=height;i++){
    console.log("#".repeat(i))
}

//5 Use loop to print the following pattern:
for(i=0;i<=10;i++){
    console.log(`${i} x ${i} = ${i*i}`);
}

//5 Using loop print the following pattern
console.log("i\ti^2\ti^3");

for(i=0;i<=10;i++){
    console.log(`${i}\t${i**2}\t${i**3}`)
 
}


//6 Use for loop to iterate from 0 to 100 and print only even numbers
for(i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}
// or
for(let i = 0; i < 101; i += 2) {
    console.log(i);
 }


//7 Use for loop to iterate from 0 to 100 and print only odd numbers
for(i=0;i<=100;i++){
    if(i%2!==0){
        console.log(i)
    }
}
 // or
 for (let i = 1; i < 101; i += 2) {
    console.log(i);
 }

//8 Use for loop to iterate from 0 to 100 and print only prime numbers
// prime numbers

//9 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum=0;
for(i=0;i<=100;i++){
    sum+=i
    
}
console.log("The sum of all numbers from 0 to 100 is",sum)



//10 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum=0;
let oddSum=0;
for(i=0;i<=100;i++){
   if(i%2==0){
 evenSum+=i
   }
   else{ oddSum+=i}  
}
// console.log(" The sum of all evens and odd from 0 to 100 is evenSum :",evenSum,"oddSum :",oddSum)




//11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let evenSumUnique=0;
let oddSumUnique=0;
for(i=0;i<=100;i++){
   if(i%2==0){
 evenSumUnique+=i
   }
  else{ oddSumUnique+=i}  
}
console.log(" The sum of all evens and odd from 0 to 100 is ",[evenSumUnique,oddSumUnique])

//12 Develop a small script which generate array of 5 random numbers
let randomNums=[]
for(i=0;i<5;i++){

   randomNums.push(parseInt(Math.PI*Math.random()*100+3))
}
console.log(randomNums);

//13 Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomNumbers=[]
for(i=0;i<5;i++){
    let randomNum=parseInt(Math.PI*Math.random()*100+3)
    if(randomNumbers.indexOf(randomNum)==-1){
      randomNumbers.push(randomNum)
    }
  }
  console.log(randomNumbers);


//14 Develop a small script which generate a six characters random id:
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12356789';
let randomId=[]
for(i=0;i<6;i++){
 randomId.push(alphabet[Math.floor(Math.random()*alphabet.length)])
}

console.log(randomId.join(""))
