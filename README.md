# Practice-Projects
here I will create mini projects for practice

## problem 1
### Create a program that demonstrates the use of let, var, and const to declare variables and shows their behavior. The program should also include examples of different JavaScript data types like string, number, boolean, array, and object. 
### Declare a const variable to store your name as a string.
### Use let to declare a variable to hold your age, and later update it to simulate a birthday.
### Use var to declare a variable for a boolean value to indicate if you're a student.
### Create an array of your favorite colors.
### Create an object to store your hobbies with their respective time spent in hours.
```
const fullName = "mehmood sultan"
let age = 28
age = 1996
var is_fullName_student = true
let myFavColors = ['green', 'yellow', 'red', 'blue']
const myHobbies = {
    morning: 'go for a walk',
    afternoon: 'lunch',
    evening: 'football',
    night: 'coding'
}
console.table([fullName,age,is_fullName_student,myFavColors,myHobbies])
```

## Problem 2
#### Create a program to demonstrate the usage of let, var, and const for variable declaration in JavaScript. The program should also show examples of different data types such as string, number, boolean, array, and object.
#### Declare a const variable to store your favorite movie title as a string.
#### Use let to declare a variable for your current age and update it to reflect a birthday.
#### Use var to declare a boolean variable indicating if you own a car. Update its value later.
#### Create an array to store names of three friends.
#### Create an object to represent a book with properties like title, author, and pages.

```
const favMovie = "3 Idiots"
console.log(`my favourite movie is ${favMovie}`);

let myAge = 27
console.log(`i am about ${myAge} years old`);

let updateAge = myAge + 1
console.log(`my updated age is ${updateAge}`);

var ownCar = false
ownCar = true
console.log(`i have a car? ${ownCar}`);

myFriends = ['hamza', 'zeeshan', 'mashood']
console.log(`the name of my friends are ${myFriends}`);

const bookInfo = {
    bookName: "Rich Dad, Poor Dad",
    bookAuthor: "Robert Noski",
    bookPages: 400
}
console.log(bookInfo);
console.log(`the name of my fav book is ${bookInfo.bookName}`);
console.log(`the name of my fav author is ${bookInfo.bookAuthor}`);
console.log(`the total pages of my book is ${bookInfo.bookPages}`);

```

## Problem 3
#### Demonstrates the use of let, var, and const for declaring variables. Uses different data types including string, number, boolean, array, and object. Logs the values and updates to the console. Declare a const variable to store your favorite food item. Use let to declare your current city and update it to simulate moving to another city. Use var to declare whether you are currently working, and change its value later. Create an array to list the programming languages you are learning. Create an object to represent a gadget with properties like name, brand, and price.
```
const favFood = "naan cholay"
console.log(`my fav food is ${favFood}`);
console.log(typeof favFood);


let city = "jauharabad"
console.log(`i am living in ${city}`);


city = "lahore"
console.log(`and i am moving to ${city}`);
console.log(typeof city);

let I_am_working = false
console.log(`in present am i employeed? ${I_am_working}`);

I_am_working = true
console.log(`in future will i employed? ${I_am_working}`);
console.log(typeof I_am_working);


const codingLanguages = ['C++', 'Java', 'JavaScript']
console.log(`i am learning programming languages like ${codingLanguages}`);
console.log(typeof codingLanguages);


const myMobile = {
    device: 'mobile',
    brand: 'tecno spark 20 pro +',
    price: 54000
}
console.log(typeof myMobile);
console.table([`my device is ${myMobile.device}`, `my mobile brand is ${myMobile.brand}`, `its price is ${myMobile.price}`])
```
