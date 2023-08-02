//1 Declare a function fullName and it print out your full name.
function fullName() {
  return "Nutan Mutakekar";
}
console.log(fullName());

//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName1(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
fullName1("Nutan", "Mutakekar");

//3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(2, 4));

//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(2, 4));

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(2, 4));

//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(l, w, h) {
  return l * w * h;
}
console.log(volumeOfRectPrism(2, 3, 4));

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
  return Math.PI * r * r;
}
console.log(areaOfCircle(3));

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
  return Math.PI * 2 * r;
}
console.log(circumOfCircle(3));

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfSubstance(m, v) {
  return m / v;
}
console.log(densityOfSubstance(23, 3));//Enter mass in kg and volume in meter 

//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function calcSpeed(d, t) {
  return d / t;
}
console.log(calcSpeed(4, 6));//enter distance in meter and time in seconds

//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
let weight = (mass, gravity = 9.8) => {
  return mass * gravity + "N";
};
console.log("weight of object in Newton: " + weight(100)); // 9.81 gravity at the surface of Earth
console.log("weight of object in Newton: " + weight(100, 1.62)); // gravity at surface of Moon

//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(c) {
  let fahrenheit = (c * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertCelsiusToFahrenheit(37));

//13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function calculateBMI(weight, height) {
  height = height * height;
  let BMI = weight / height;
  if (BMI < 18.5) {
    console.log(` you are underweight and your bmi index is:` + BMI);
  } else if (BMI > 18.5 && BMI <= 24.9) {
    console.log("you are normal weight and your bmi index is:" + BMI);
  } else if (BMI >= 25 && BMI <= 29) {
    console.log("you are overweight and your bmi index is:" + BMI);
  } else if (BMI > 30) {
    console.log("you are obese and your bmi index is:" + BMI);
  }
  return BMI;
}
console.log(calculateBMI(50, 1.58)); //enter weight in kg and height in meter

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    let season;
    
    switch (month.toLowerCase()) {
       case "september":
       case "october":
       case "november":
          season = "Autumn";
          break;
    
       case "december":
       case "january":
       case "february":
          season = "Winter";
          break;
    
       case "march":
       case "april":
       case "may":
          season = "Spring";
    
       case "june":
       case "july":
       case "august":
          season = "Summer";
          break;
    }
    return season;
 } console.log(checkSeason("sepTeMBer"));


//15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax2(arr) {
  let maxNum = 0;
  for (const num of arr) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}
let number=[2,4,58]
console.log(findMax2(number));
console.log(findMax2([34,6,789]));

