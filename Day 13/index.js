// 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
// reads I love TypeScript.Make a large shirt and a medium shirt with the default message,and a shirt of any 
// size with a different message.
function make_shirt2(size = "large", text = "I Love Typescript") {
    console.log(`you have ordered a ${size}, shirt that says ${text}`);
}
make_shirt2();
make_shirt2("medium");
make_shirt2("small", "Kindness Matters");
// 38: Cities: Write a function called describe_city that accepts the name of a city and its country.The 
// function should print a simple sentence,such as Karachi is in Pakistan.Give the parameter for the country 
// a different value.Call your function of three different cities,at least one of which is not in the default
// country.
function describe_city(city, country) {
    console.log(`${city} is in ${country}`);
}
describe_city("Athens", "Greece");
describe_city("Philadelphia", "Pennysylvania");
describe_city("Toronto", "Canada");
// 39: City Names:Write a function called city_country() that takes in the name of a city and its country.The
// function should return a string formatted like this:
// "Lahore,Pakistan"
// Call your function with at least three city-country pairs,and print the value that's returned.
function city_country(city, country) {
    return city + ", " + country;
}
let c1 = city_country("Copenhagen", "Denmark");
let c2 = city_country("Seoul", "South Korea");
let c3 = city_country("Karachi", "Pakistan");
console.log(c1);
console.log(c2);
console.log(c3);
export {};
