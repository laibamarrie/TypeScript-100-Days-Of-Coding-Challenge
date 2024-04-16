// 13. Your Own Array: Think of your favorite mode of transportation,such as a motorcycle or a car,
// and make a list that stores several examples.Use your list to print a series of statements about
// these items,such as "I would like to own a Honda motorcycle."

let transportation : string [] = ["Honda Motorcycle","Ford Mustang","Volkswagen Taigun"];
transportation.map((items) => console.log(`I would like to own a ${items}`));

// 14. Guest List: If you could invite anyone,living or deceased,to dinner,who would you invite?Make a list 
// that includes at least three people you'd like to invite to dinner.Then use your list to print a message 
// to each person,inviting them to dinner.

let guestArr : string [] = ["Sara","Areeba","Ali"];

guestArr.map((items) => (console.log(`Dear ${items},You are invited to the dinner.`)));

// 15. Changing Guest List: You just heard that one of your guests can't make the dinner,so you need to
// send out a new set of Invitations.You'll have to think of someone else to invite.
// . Start with your program from Exercise 14.Add a print statement at the end of your program stating 
// the name of the guest who can't make it.
// . Modify your list,replacing the name of the guest who can't make it with the name of the new person 
// you are inviting.
// . Print a second set of invitation messages,one for each person who is still in your list.

let otherguestArr : string[] = ["Laiba","Aria","Nadia","Adeel"];
let cannotAttend : string = "Laiba";

console.log(cannotAttend + " " ,'can not attend the dinner.');

let newGuest : string = "Alia";

otherguestArr [otherguestArr.indexOf(cannotAttend)] = newGuest;

console.log(otherguestArr);

otherguestArr.map((items)=>
console.log(`Dear ${items}, you are invited to the dinner.`));