//1
const now = new Date(Date.now());
console.log('thecurrent time is');
console.log(now.toDateString());

//2
const today = new Date();
const birthday = new Date('January 9, 2004 12:00:00');
const birthday2 = new Date('2004-1-9T12:00:00');
const birthday3 = new Date(2004, 0, 9);
const birthday4 = new Date(2004, 0, 9, 12, 0, 0);
const birthday5 = new Date(628021800000);

//3
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());

//4
now.setFullYear(2020);
console.log(now.getFullYear());

now.setDate(10);
console.log(now.getDate());

//5
let newDate = new Date();
setTimeout(() => {
    newDate = Date.now();
    console.log(newDate - now);
}, 1000);