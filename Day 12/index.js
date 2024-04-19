// 34: Pizzas: Think of at least three kind of your favorite pizza.Store these pizza names in a array,and then use a
// for loop to print the name of each pizza.
// . Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the 
//   pizza.For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// . Add a line at the end of your program,outside the for loop,that states how much you like pizza.The output should
//   consists of three or more lines about the kinds of pizza you like and then an additional sentence,such as I really 
//   love pizza!.
let favorite_pizza = ["Cheese", "BBQ Chicken", "Veggie"];
for (let pizza of favorite_pizza) {
    console.log(pizza);
}
console.log("\n");
for (let pizza of favorite_pizza) {
    console.log(`I really like ${pizza}pizza!`);
}
console.log("nI really love pizza");
// 35. Animals: Think of at least three different animals that have a common characteristic.Store the names of these 
// animals in a list,and then use a for loop to print out the name of each animal.
// . Modify your program to print a statement about each animal,such as A dog would make a great pet.
// . Add a line at the end of your program stating what these animals have in common.You could print a sentence such 
//   as Any of these animals would make a great pet!
let animals = ["cat", "dog", "monkey"];
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
for (let animal of animals) {
    console.log(`A ${animal} is a great pet`);
}
console.log("\n all of these are great pet! but i love cats more");
// 36: T-Shirt: Write a function called make_shirt()that accepts a size and the text of a message that should be 
// printed on the shirt.The function should print a sentence summarizing the size of the shirt and the message
// printed on it.Call the function.
function makeShirt(size, text) {
    console.log(`you order a ${size}shirt that says ${text}`);
}
makeShirt('large', '" Believe in your dreams and follow your heart "');
makeShirt('medium', '" Sore Today , Strong Tomorrow "');
export {};
