// 22. Intentional Error: If you haven't received an array index error in one of your programs yet,try to make one happen.
// Change an index in one of your programs to produce an index error.Make sure you correct the error before closing the 
// program.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days{7})
console.log(days[6]);
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction
// for the results for each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car =='subaru'? | predict True.")
// console.log(car =='subaru')
// . Look closely at your results,and make sure you understand why each line evaluates to True or False.
// . Create at least 10 tests.Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "subaru";
console.log("Is car == 'subaru'? | predict True");
console.log(car == 'subaru');
console.log("Is car != ''honda city'? | predict True");
console.log(car != 'honda city');
console.log("Is car == 'Subaru'? | predict False");
console.log(car == 'Subaru');
console.log("Is car == 'SUBARU'? | predict False");
console.log(car == 'SUBARU');
console.log("Is car.length == 6? | predict True");
console.log(car.length == 6);
console.log("Is car.length != 10? | predict True");
console.log(car.length != 10);
console.log("Is 10 > 45 ? | predict False");
console.log(10 > 45);
console.log("Is 10 > 45 ? | predict False");
console.log(10 > 45);
console.log("Is 3 <= 2 ? | predict False");
console.log(3 <= 2);
console.log("Is 72 > 63 ? | predict False");
console.log(72 > 63);
// 24. More Conditional Tests: You don't have to limit the number of tests you create yo 10.If you want to try 
// more comparisons,write more tests.Have at least one True and one False result for each of the following:
// . Tests for equality and inequality with strings.
// . Tests using the lower case function.
// . Numerical tests involving equality and inequality,greater than and less than,greater than or equal to,and
//   less than or equal to.
// . Tests using "and" or "or" operators.
// . Tests whether an item is in a array.
// . Test whether an item is not in a array.
let name_1 = "laiba";
let name_2 = "laiba marrie";
let name_3 = "miss laiba marrie";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
if (name_1 != name_3) {
    console.log("names are equal");
}
let age_1 = 18;
let age_2 = 23;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 != 23) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) { //less than
    console.log("younger");
}
if (age_2 >= age_1) { //greater than
    console.log("older");
}
if (age_1 == 18 && age_2 == 23) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 != 23) {
    console.log("person is not eligible for vote");
}
let rivers = ["Jhelum River", "Indus River", "Sutlej River", "Hingol River", "Neelum River"];
if (rivers.includes("Jhelum River")) {
    console.log("Jhelum River is in rivers lists");
}
if (!rivers.includes("Astor River")) {
    console.log("Astor River is not included in an array");
}
export {};
