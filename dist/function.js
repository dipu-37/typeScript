"use strict";
// default value 
function add(num1, num2 = 10) {
    return num1 + num2;
}
console.log(add(2, 4)); // Shows the result of the add function
// spread operator 
const myFriends = ["dipu", "pk", "rakin", "saif"];
const newFriends = ["mehadi", "safawan"];
myFriends.push(...newFriends);
console.log(myFriends); // Should print the updated myFriends array with newFriends added
// rest parameter 
const greetFriend = (...friends) => friends.forEach((friend) => {
    console.log(`Hi ${friend}`);
});
greetFriend("dipu", "pk", "rakin"); // Shows the array of friends
// const greetFriends = (friend1: string, friend2: string, friend3: string): void =>
//     console.log(`Hi ${friend1}\nHi ${friend2}\nHi ${friend3}\n`);
// greetFriends("dipu", "pk", "rakin"); // Greet each friend individually
// Arrow function
const addArrow = (num1, num2) => num1 + num2;
console.log(addArrow(5, 7)); // Prints the sum of num1 and num2
// Array map function
const arr = [1, 3, 5, 6, 7];
const newArray = arr.map((element) => element * element);
console.log(newArray); // Shows the array with squared elements
// Object with method
const person = {
    name: "dipu",
    balance: 5,
    addbalance(money) {
        return this.balance + money;
    },
};
console.log(person.addbalance(10)); // Shows the updated balance after adding money
