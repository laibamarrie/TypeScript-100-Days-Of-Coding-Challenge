// 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple 
// hobbies.It should log each hobby with a statement saying you enjoy that hobby.
function enjoyHobbies(...hobbies) {
    for (const hobby of hobbies) {
        console.log(` I enjoy ${hobby}`);
    }
}
enjoyHobbies("coding", "reading", "watching TV", "cooking");
// 50: Multiline Template Literals: Use template literals to create a multiline string that describes your
// ideal day.Include at least three different activities.
const idealDay = ` My Ideal day would start with prayer and a cup of tea.
 In the afternoon , I would do some coding and then dive into a good book.
 In the evening, after having dinner, I would watch TV with my loved ones and then follow my skincare routine. `;
console.log(idealDay);
// 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and
// refactor it into an arrow function.
function calculateArea(width, height) {
    return width * height;
}
const rectangleArea = (width, height) => width * height;
export {};
