//Create a variable that contains your name as a value.
//Name the variable appropriately.
var name = "Guido"

// Create a constant that contains the number of states in the U.S. and name it appropriately.
const numUsStates = 50

//Compute the result of adding 5 and 4 and store it in an appropriately named variable.
var compute = 5 + 4;

//Write a function called sayHello that displays an alert that says Hello World!
//Call the sayHello function.

function sayHello() {
    alert("Hello World")
}

sayHello()

//Write a function called checkAge that takes two arguments: one for a name and one for an age. 
//If the age is less than 21, display an alert that says, "Sorry " + name + ", you aren't old enough to view this page!"

function checkAge (name, age) {
    if (age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }

}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)
//Call the checkAge function 4 times with the following people: Charles who is 21, Abby who is 27, James who is 18, and John who is 17.
//Hint: scroll down to "JavaScript String Operators" to see how to combine a variable with a string correctly.

//Create an array of your favorite vegetables and name it accordingly.

var favVeggies = ["onion", "carrot", "pepper", "potatoes"]

//Use a loop to display each of your favorite vegetables to the developer console.
for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i])    
}


//Create an array of 5 objects that contain name and age properties. Make up names and ages for each object, making sure some are younger than 21 and some are 21+.

let friends = [
    {
      name: "Juan",
      age: 20,
    },
    {
      name: "David",
      age: 28,
    },
    {
      name: "Brian",
      age: 32, 
    },
    {
      name: "Beto",
      age: 23,
    },
    {
      name: "Yoda",
      age: 18,
    }
] 
//Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.
for (let f = 0; f < friends.length; f++) {
    checkAge(friends[f].name, friends[f].age)

}

//Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.

function getLenght(word) {
    return word.length
}

//Call the getLength function, passing 'Hello World' as the argument. Store the returned result of that function in a variable.

var hello = getLenght('hello world')

//If the number is even, display 'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.

if ((hello % 2) == 0){
    console.log('The world is nice and even!')
}else{
    console.log('The world is an odd place!')
}