//1
var helloworld = "Hello World";
console.log(helloworld.charAt());

//2
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;

//3
let c = 'c';
let d = 'd';
console.log(c.toUpperCase());
console.log(d.toUpperCase());
console.log(c + d);

//4
let a = 'a';
let b = 'b';
if (a < b) {
    // true
    console.log(a + ' is less than ' + b);
} else if (a > b) {
    console.log(a + ' is greater than ' + b);
} else {
    console.log(a + ' and ' + b + ' are equal.');
}

//5
let longString = 
    'This is a very long string which needs ' +
    'to wrap across multiple lines because ' +
    'otherwise my code is hard to understand.';

console.log(longString);
longString = 
    'This is a very long string which needs \
                    to wrap across multiple lines because \
                    otherwise my code is hard to understand.';

console.log(longString);
