// 16. More Guests: You just found a bigger dinner table, so now more space is available.Think of three more
// guests to invite to dinner.
// . Start with your program from Exercise 15.Add a print statement to the end of your program informing people
// that you found a bigger dinner table.
// . Add one new guest to the beginning of your array.
// . Add one new guest to the middle of your array.
// . Use append() to add one new guest to the end of your list.
// . Print a new set of invitation messages, one for each person in your list.

let secondguestArr : string[] = ["Alia","Aria","Nadia","Adeel"];

let unabletoAttend : string = "Adeel";

 let othernewGuest : string= "Hina";

 secondguestArr[secondguestArr.indexOf(unabletoAttend)] = othernewGuest;
 console.log(secondguestArr);

 secondguestArr.map((items)=> 
 console.log(`Dear ${items}, I found a bigger dinner table so i am invited more people.`)
 );
    
 // Part 2
 let guestBeg : string = "Maheen";
 secondguestArr.unshift(guestBeg);
 console.log(secondguestArr);

 // Part 3
 let middleGuest : string = "Riya";
 let middleIndex = secondguestArr.length/2;
 secondguestArr.splice(middleIndex,0,"Riya");
 console.log(secondguestArr);

 // Part 4
 secondguestArr.push("Bilal");
 console.log(secondguestArr);

 // Part 5
 secondguestArr.map((items)=>
 console.log (`Dear ${items}, you are invited in the more people list on dinner.`)
 );

 // 17. Shrinking Guest List: You just found out that your new dinner table won't arrive in time for the dinner,
// and you have space for only two guests.
// . Start with your program from Exercise 16.Add a new line that prints a message saying that you can invite
// only two people for dinner.
// . Remove guests from your list one at a time until only two names remain in your list.Each time you pop a 
// name from your list,print a message to that person letting them know you're sorry you can't invite them to 
// dinner.
// . Print a message to each of the two people still on your list,letting them know they're still invited.
// . Remove the last two names from your list,so you have an empty list.Print your list to make sure you 
// actually have an empty list at the end of your program.

// Initial list of guests
let guests: string[] = ["Kathryn","Bilal","Harry","Helly"];

// Informing that only two people can be invited
console.log("Due to limited space only two people can be invited for dinner");

// Removing guest until only two names remain

 while(guests.length > 2){
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
 };
 
// Remaining two guests
let remaingGuests: string[] = guests.slice(0, 2); //Get the first two element from the guests list

// Printing invitations to the remaining two guests
remaingGuests.forEach((remaingGuests)=>{
    console.log(`Dear ${remaingGuests}, you're still invited to the dinner.`);
});
// Removing the last two names from the list
guests.pop();
guests.pop();

// Printing the final list to confirm it's empty
console.log("Final guest list:", guests);

// 18. Seeing The World: Think of at least five places in the world you'd like to visit.
// . Store the locations in a array.Make sure the array is not in alphabetical order.
// . Print your array in its original order.
// . Print your array in alphabetical order without modifying the actual list.
// . Show that your array is still in its original order by printing it.
// . Print your array in reverse alphabetical order without changing the order of the original list.
// . Show that your array is still in its original order by printing it again.
// . Reverse the order of your list.Print the array to show that its order has changed.
// . Reverse the order of your list again.Print the list to show it's back to its original order. 
// . Sort your array so it's stored in alphabetical order.Print the array to show that its order has been changed.
// . Sort to change your array so it's stored in reverse alphabetical order.Print the list to show that its order has changed.

// Store the locations in an array
let placestoVisit : string[] = ["England","Switzerland","Turkey","Maldives","Croatia"];

// Print the array in it's original order
console.log("original order:", placestoVisit);

// Print the array in alphabetical order without modifying the actual list.
console.log("alphabetical order:", [...placestoVisit].sort());

// Show that array is still in its original order
console.log("original order after sorting:", placestoVisit);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:", [...placestoVisit].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log("original order after reverse sorting:", placestoVisit);

//  Reverse the order of your list.Print the array to show that its order has changed.
placestoVisit.reverse();
console.log("reverse order:", placestoVisit);

// Reverse the order of your list again.Print the list to show it's back to its original order.
placestoVisit.reverse();
console.log("back to original order:", placestoVisit);

//  Sort your array so it's stored in alphabetical order.Print the array to show that its order has been changed.
placestoVisit.sort();
console.log("sorted in alphabetical order:", placestoVisit);

// Sort to change your array so it's stored in reverse alphabetical order.Print the list to show that its order has changed.
placestoVisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", placestoVisit);
