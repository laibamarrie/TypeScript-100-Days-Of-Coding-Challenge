// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of it's author.
// Your output should look like something like the following, including the quotation marks:
// Albert Einstein once said ,"A person who never made a mistake never tried anything new."
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
// 5. Famous Quotes 2: Repeat exercise 4, but this time store the famous person's name in a variable called
// famous person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson = "Albert Einstein";
let Message = `${famousPerson} once said, "${quote}"`;
console.log(Message);
// 6. Stripping Names: Store a person's name,and include some whitespace characters at the beginning and end of the 
// name. Make sure you use each character combination, "\t" and "\n",at least once.Print the name once,so the 
// whitespace around the name is displayed. Then print the name after striping the white spaces.
let otherpersonName = "\t\n   Laiba Marrie \n\t";
console.log("original:", otherpersonName);
console.log("stripped:", otherpersonName.trim());
export {};
