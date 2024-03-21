let guestList = ["Junaid", "Hamza", "Areeb", "Luqman"];
let dontCome = guestList[1];
console.log(dontCome, 'will not come');
guestList.splice(1, 1, "Asif");
guestList.forEach(guest => console.log(`Hello, ${guest}, would you like to dinner with me?`));
export {};
