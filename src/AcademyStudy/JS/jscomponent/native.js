 
/*VARIABLES*/ 
//var
var message;
message = 'Hello world';

var name = 'Jhon';

//let

let count = 10;

if(count > 5) {
    let count = 5;
    console.log(count); //5
}

console.log(count); //10

//const
const user = {
    name: 'Jhon',
    age:24
};
const GRAY = '#ccc';

/*STRING*/
let str = "new string";

let age = 23;
let newStr = `age = ${age}`;
console.log(newStr);

console.log(`first line
second line`);

newStr = str + ' second string'; //New string second string same as .concat();
console.log(newStr);

console.log('_______________');
console.log(str.length);
console.log(str.charAt(2));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf('str'));
console.log(newStr.substring(11, 17));//starting string/and end string
console.log(newStr.substr(11, 6)); //starting string/and numbers of characters
console.log('_______________');
/*SYMBOL ES2015*/
// Symbol is a unique and immutable primitive value and may be used as the key of an Object property

let isAdmin = Symbol("isAdmin");

let userAdmin = {
    name: "Boss",
    [isAdmin]: true
};

console.log(userAdmin[isAdmin]);
console.log(userAdmin.isAdmin); //undefined
console.log(userAdmin);
console.log('_______________');

/*TYPE CONVERSION*/ 
// converting to string
console.log(String(null));
console.log(false.toString());
console.log(12 + "px");

//converting to boolean
console.log('_______________');
console.log(Boolean(undefined));
console.log(!!'text');

//converting to numbers
console.log('_______________');
console.log(Number(true));
console.log(parseInt('3.14'));
console.log(parseFloat('3.14'));
console.log(12 - '4');
console.log(typeof(12 + '4') +" "+ 12 + '4');

console.log(12 + +'4');
console.log('_*Switch Statements*_');
/* Switch Statements */
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    
}
console.log(day);

// var Animal = prompt('Enter animal like cow,giraffe,monkey..,do not enter a number','giraffe');
var Animal = 'Cow';

switch(Animal) {
    case'Cow':
    case'giraffe':
    case'Monkey':
    case'Rabbit':
    case'Lion':
        console.log('This animal will go home.');
        break;
    case 'Spoon':
        console.log('A spoon is not an animal!');
        break;
    case 'Dinosaur':
    default:
        console.log('This animal won\'t go home');        
}















