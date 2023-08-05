// Exercises: Level 1
//1 Create an empty object called dog
const dog={}

//2 Print the the dog object on the console
console.log(dog)

//3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name="dolly"
dog.legs=4
dog.color="brown"
dog.age=2
dog.bark=()=>"woof woof"

//4 Get name, legs, color, age and bark value from the dog object
console.log(dog.name,dog.legs,dog.color,dog.age,dog.bark())

//5 Set new properties the dog object: breed, getDogInfo
dog.breed='husky'
dog.getDogInfo=function(){
    let info=`${this.name} is ${this.breed} breed dog ,it has ${this.legs} legs , ${this.color} in color , is ${this.age} years old and it barks as ${this.bark()}`
    return info
}
console.log(dog.getDogInfo())
