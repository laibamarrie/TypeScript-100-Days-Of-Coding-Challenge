// 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
// Include its brand,model, and other key features like how much storage it has,the size 
// of it's screen, and how long its battery lasts.

const smartphoneDetails = {
    brand: "Xiaomi" ,
    model: "Xiaomi Redmi Note 13 Pro",
    storage: "512GB 12GB RAM" ,
    screenSize:  "6.67 inches" ,
    batteryLife: "2 days 8h",
}
const smartphone = smartphoneDetails;
console.log(smartphone);

// 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a 
// computer programmer knows, like coding languages, tools, and software frameworks.Find a way to get 
// three specific skills from this list and show them.

const programmerSkills = {
    codingLanguages: ["JavaScript","Python","Java"],
    tools: ["Git", "Visual Studio Code", "Jupyter Notebook"],
    softwareFrameworks: ["React", "Django", "TensorFlow"],
};
 
// Access specific skills

const firstCodingLanguage = programmerSkills.codingLanguages[0];
const mainTool = programmerSkills.tools[1];
const popularFramework = programmerSkills.softwareFrameworks[0];

console.log(`First coding language: ${firstCodingLanguage}`);
console.log(`Main tool: ${mainTool}`);
console.log(`Popular framework: ${popularFramework}`);

// 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section
// based on what you need at that moment, like adjusting labels based on user choices.

const myData: any = {
  "fruits": ["Strawberry","Mango","Peach"],
  "vegetables": ["Carrot","Peas","Cucumber"],
}

// Accessing and modifying data based on user choices
const user_choice: any = "vegetables";
console.log(`Selected category: ${user_choice}`);
console.log(`Items in ${user_choice}: ${myData[user_choice]}`)

// Add new key-value pairs or modify existing ones dynamically
myData["dairy"] = ["milk", "cheese", "yogurt"]
console.log(myData);