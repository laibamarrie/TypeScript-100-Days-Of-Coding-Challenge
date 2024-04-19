// 43: Unchanged Magicians: Start with your work from Exercise 40.Call the function make_great() with a
// copy of the array of magicians' names.Because the original array will be unchanged, return the new array 
// and store it in a separate array.Call show_magicians() with each array to show that you have one array
// of the original names and one array with the Great added to each magician's name.

const magicians3 : string[] = ["Ricky Jay","Harry Kellar","Mac King","David Blaine"];

function show_magicians2(magicians3:string[]): void {
    for (const magician of magicians3){
        console.log(magician);
    }
};


function make_great2 (magicians3: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians3.length; i++){
        greatMagicians.push(magicians3[i] + " the Great ");
    }
    return greatMagicians;
}


const greatMagicians2: string[] = make_great2(magicians3);

show_magicians2(magicians3);
show_magicians2(greatMagicians2);

// 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.The function 
// should have one parameter that collects as many items as the function call provides, and it should print
// a summary of the sandwich that is being ordered.Call the function three times,using a different number of 
// arguments each time.

function sandwich(...items: string[]) : void {
    console.log("Sandwich order:");
    let i = 0;
    while(i < items.length) {
        console.log(` - ${items[i]}`);
        i++;
    }
}

sandwich('cheese','tomato','basil');
sandwich('chicken','mayonnaise','celery');
sandwich('cream cheese','fried egg','cheddar cheese','hot sauce');

console.log("I hope you enjoy your sandwich, Laiba!");

// 45: Cars: Write a function that stores information about a car in a Object.The function should always
// receive a manufacturer and a model name.It should then accept an arbitary number of keyword arguments.Call
// the function with the required information and two other name-value pairs,such as a color or an optional 
// feature.Print the Object that's returned to make sure all the information was stored correctly.

function createCar (manufacturer: string, model: string, optional = {}){
  const car = {
    manufacturer,
    model,
    ...optional,
  };
  return car;
 }
const myCar = createCar( "Ford", "Mustang", { color: "blue", year: 2022});
console.log(myCar);
