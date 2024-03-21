// creating guest list array
let guestList = ["Junaid", "Hamza", "Areeb", "Luqman"];

// making variable for who not come
let dontCome = guestList[1];

// print the name of guest who cant come
console.log (dontCome, 'will not come');

// add or remove value from guest list array
guestList.splice(1, 1,"Asif");

// message print for bigger table
console.log ("I am found Bigger table for dinner");

// adding a value on starting index of array
guestList.unshift("Ali");

// adding a new value at ending index of array
guestList.push("Zain");

// get middle index of array
let middleIndex: number = Math.floor(guestList.length / 2);

// adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Farhan");

// print text updated list of guest
console.log("Updated List of our Guest");

// sending invitation to our guest one by one
guestList.forEach(guest => console.log(`Hello, ${guest}, would you like to dinner with me?`));