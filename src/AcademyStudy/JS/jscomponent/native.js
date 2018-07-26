 
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
let isAdmin = Symbol("isAdmin");

let userAdmin = {
    name: "Boss",
    [isAdmin]: true
};

console.log(userAdmin[isAdmin]);
console.log(userAdmin.isAdmin);
console.log(userAdmin);
console.log('_______________');