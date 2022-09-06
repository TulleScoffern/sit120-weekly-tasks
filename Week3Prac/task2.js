// Set Snack Array
let snacks = ['Donut', 'Muffin', 'Cookie', 'Cake'];
console.log(snacks);


// A Find Method
console.log(snacks.find((snack) => snack === 'Muffin'));
console.log(snacks.find((snack) => snack === 'Pizza'));


// A Find Index Method
console.log(snacks.findIndex((snack) => snack == 'Muffin'))
console.log((firstIndex = snacks.findIndex((snack) => snack === 'Pizza')));


// A Push Method
console.log(snacks.push('Danish'));
console.log(snacks);

// A Pop Method
console.log(snacks.pop());
console.log(snacks);

// Set Number Array
let numbers = [4, 7, 9, 2, 3]

// A Sort Method
console.log(numbers.sort());

// A Slice Method
console.log(snacks.slice(1, 3));

console.log(snacks.slice(1));
console.log(snacks.slice(-1));

snacks.forEach((snack) => console.log(snack));