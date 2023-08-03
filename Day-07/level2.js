// Exercises: Level 2

//2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a, b, c) {
  let root1;
  let root2;
  let D = b ** 2 - 4 * a * c;
  if (D > 0) {
    root1 = ((-b + Math.sqrt(D)) / 2) * a;
    root2 = ((-b - Math.sqrt(D)) / 2) * a;
    return `the roots are real and distinct the root1 : ${root1} and root2 :${root2}`;
  } else if (D == 0) {
    root1 = (-b / 2) * a;
    return `the roots are real and equal the root1 : ${root1} and root2 :${root1}`;
  } else if (D < 0) {
    let realPart = (-b / 2) * a;
    let imaginaryPart = (Math.floor(Math.sqrt(-D)) / 2) * a;
    return `the roots are imaginary the real part and imaginary parti :${realPart}+${imaginaryPart}i and ${realPart}-${imaginaryPart}i`;
  }
}
console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  return arr.map((b) => b);
}
let array = [4, 8, 12];
console.log(printArray(array));

//4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let time = now.getHours();
  let minutes = now.getMinutes();
  return `${date}/${month}/${year} and time is ${time}:${minutes}`;
}
console.log(showDateTime());

//5 Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a, b) {
  let x = a;
  let y = b;
  console.log(y, x);
}
swapValues(3, 4); // x = 4, y = 3
swapValues(4, 5); // x = 5, y = 4

//6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']

//7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }
  return newArr;
}
console.log(capitalizeArray(["renu", "monu", "sonu"]));

//8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr) {
  return arr.reduce((x, y) => x + y);
}
console.log(addItem([1, 2, 3, 4]));

//9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let removeItem2 = (index) => {
  let name = ["Nutan", "gayatri", "divya", "sonu", "sakshi"];
  let newArr = [];
  for (i = 0; i < name.length; i++) {
    if (i == index) {
      continue;
    } else {
      newArr.push(name[i]);
    }
  }
  return "array after removing item " + newArr;
};

console.log(removeItem2(3));

//10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
let sumOfNumbers = (arg) => {
  let sum = 0;
  for (i = 0; i <= arg; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumOfNumbers(5));
// or
let sumOfNumbers2 = (...arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfNumbers2(1, 2, 3, 4, 5));

//11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
let sumOfOdds = (...arg) => {
  let sumOdd = 0;
  for (i = 0; i <= arg; i++) {
    if (i % 2 !== 0) {
      sumOdd += i;
    }
  }
  return sumOdd;
};
console.log(sumOfOdds(5));
// or
let sumOfOdd2 = (...arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
};
console.log(sumOfOdd2(1, 2, 3, 4, 5));

//12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

let sumOfEven = (...arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
};
console.log(sumOfEven(1, 2, 3, 4, 5, 6));
// or
let sumOfEven2 = (num) => {
  let even = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      even += i;
    }
  }
  console.log(`the sum of even number is ${even}`);
};
sumOfEven2(6);

//13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
let evensAndOdds = (num) => {
  let even = 0;
  let odd = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(`the number of even are${even}
the number of odds are ${odd}`);
};
evensAndOdds(100);

//14 Write a function which takes any number of arguments and return the sum of the arguments
let sumOfArg = (...arr) => {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  console.log(sum);
};
sumOfArg(1, 2, 3); // -> 6
sumOfArg(1, 2, 3, 4); // -> 10

//15 Writ a function which generates a randomUserIp.
function randomUserIp() {
  let id = "";
  let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (i = 0; i < 4; i++) {
    id += string.charAt(Math.floor(Math.random() * string.length));
    id += string.charAt(Math.floor(Math.random() * string.length));
    id += string.charAt(Math.floor(Math.random() * string.length));
    id += string.charAt(Math.floor(Math.random() * string.length));
    if (i != 3) id += ":";
  }
  return id;
}
console.log(randomUserIp());

//16 Write a function which generates a randomMacAddress
function macHello() {
  let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (i = 0; i < 6; i++) {
    id += string.charAt(Math.floor(Math.random() * string.length));
    id += string.charAt(Math.floor(Math.random() * string.length));
    if (i != 5) id += ":";
  }
  return id;
}
console.log(macHello());

//17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
  let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let hexCode = "";
  for (i = 0; i < 6; i++) {
    hexCode += string.charAt(Math.floor(Math.random() * string.length));
  }
  return `#${hexCode}`;
}
console.log(randomHexaNumberGenerator());
// or
function randomHexaNumberGenerator2() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
console.log(randomHexaNumberGenerator2());

//16 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let userId = "";
  for (i = 0; i < 7; i++) {
    userId += string.charAt(Math.floor(Math.random() * string.length));
  }
  return `${userId}`;
}
console.log(userIdGenerator());
// 41XTDbE
