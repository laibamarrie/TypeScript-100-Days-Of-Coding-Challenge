// 28. Stages Of Life: Write an if-else chain that determines a person's stage of life.Set a value
// for the variable age,and then:
// . If the person age is less than 2 years old,print a message that the person is a baby.
// . If the person age is at least 2 years old but less than 4,print a message that the person is a toddler.
// . If the person age is at least 4 years old but less than 13,print a message that the person is a kid.
// . If the person age is at least 13 years old but less than 20,print a message that the person is a teenager.
// . If the person age is at least 20 years old but less than 65,print a message that the person is an adult.
// . If the person is age 65 or older,print a message that the person is an elder.
let personAge = 1;
if (personAge < 2) {
    console.log("the person is a baby");
}
else if (personAge < 4) {
    console.log("the person is a toddler");
}
else if (personAge < 13) {
    console.log("the person is a kid");
}
else if (personAge < 20) {
    console.log("the person is a teenager");
}
else if (personAge < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge2 = 3;
if (personAge2 < 2) {
    console.log("the person is a baby");
}
else if (personAge2 < 4) {
    console.log("the person is a toddler");
}
else if (personAge2 < 13) {
    console.log("the person is a kid");
}
else if (personAge2 < 20) {
    console.log("the person is a teenager");
}
else if (personAge2 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge3 = 10;
if (personAge3 < 2) {
    console.log("the person is a baby");
}
else if (personAge3 < 4) {
    console.log("the person is a toddler");
}
else if (personAge3 < 13) {
    console.log("the person is a kid");
}
else if (personAge3 < 20) {
    console.log("the person is a teenager");
}
else if (personAge3 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge4 = 16;
if (personAge4 < 2) {
    console.log("the person is a baby");
}
else if (personAge4 < 4) {
    console.log("the person is a toddler");
}
else if (personAge4 < 13) {
    console.log("the person is a kid");
}
else if (personAge4 < 20) {
    console.log("the person is a teenager");
}
else if (personAge4 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge5 = 45;
if (personAge5 < 2) {
    console.log("the person is a baby");
}
else if (personAge5 < 4) {
    console.log("the person is a toddler");
}
else if (personAge5 < 13) {
    console.log("the person is a kid");
}
else if (personAge5 < 20) {
    console.log("the person is a teenager");
}
else if (personAge5 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
let personAge6 = 80;
if (personAge6 < 2) {
    console.log("the person is a baby");
}
else if (personAge6 < 4) {
    console.log("the person is a toddler");
}
else if (personAge6 < 13) {
    console.log("the person is a kid");
}
else if (personAge6 < 20) {
    console.log("the person is a teenager");
}
else if (personAge6 < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
// 29. Favorite Fruit: Make a array of your favorite fruits,and then write a series of independent if statement 
// that check for certain fruits in your array.
// . Make a array of your three favorite fruits and call it favorite_fruits.
// . Write five if statements.Each should check whether a certain kind of fruit is in your array.If the fruit is
//   in your array,the if block should print a statement,such as You really like bananas!
let favorite_fruits = ["Strawberry", "Mango", "Peach"];
if (favorite_fruits.includes("Strawberry")) {
    console.log("You really like strawberry!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("You really like mango!");
}
if (favorite_fruits.includes("Peach")) {
    console.log("You really like peach!");
}
if (favorite_fruits.includes("Apricot")) {
    console.log("You really like apricot!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like orange!");
}
// 30. Hello Admin: Make a array of five or more usernames,including the name 'admin'.Imagine you are writing code
// that will print a greeting to each user after they log in to a website,Loop through the array,and print a greeting 
// to each user:
// . If the username is 'admin',print a special greeting,such as Hello admin,would you like to see a status report?
// . Otherwise,print a generic greeting,such as Hello Eric,thank you for logging in again.
let usernames = ["admin", "laibamarrie", "jane", "Komal", "zaid"];
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username},thank you for logging in again`);
    }
}
export {};
