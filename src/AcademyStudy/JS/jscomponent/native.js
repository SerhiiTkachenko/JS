 
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
console.log('-----------/* 20 String Methods */-----------------------');

/* 20 String Methods */

var stringOne = "freeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend development"

// charAt()
console.log(stringOne.charAt(1))

// charCodeAt()
console.log(stringOne.charCodeAt(1))

// concat()
console.log(stringOne.concat(stringTwo))

// endsWith()
console.log(stringOne.endsWith("to"))

// fromCharCode()
console.log(String.fromCharCode(114))


// includes()
console.log(stringTwo.includes("end"))


// indexOf()
console.log(stringTwo.indexOf("end"))

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end"))

// match()
console.log(stringTwo.match(/end/g))

// repeat()
console.log(stringOne.repeat(3))


// replace()
console.log(stringTwo.replace(/end/g, "END"))

// search()
console.log(stringTwo.search("end"))

// slice()
console.log(stringTwo.slice(2, 4))

// split()
console.log(stringOne.split(" "))

// startsWith()
console.log(stringOne.startsWith("free"))

// substr()
console.log(stringTwo.substr(2, 4))

// substring()
console.log(stringTwo.substring(2, 4))

// toLowerCase()
console.log(stringOne.toLowerCase())

// toUpperCase()
console.log(stringOne.toUpperCase())

// trim()
var stringThree = "     LOL GO!      ";
console.log(stringThree.trim())
console.log('----------------------------------');
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
document.querySelector('#test').innerHTML = "It is " + day;

// var Animal = prompt('Enter animal like cow,giraffe,monkey..,do not enter a number','giraffe');
// var Animal = 'Cow';

// switch(Animal) {
//     case'Cow':
//     case'giraffe':
//     case'Monkey':
//     case'Rabbit':
//     case'Lion':
//         console.log('This animal will go home.');
//         break;
//     case 'Spoon':
//         console.log('A spoon is not an animal!');
//         break;
//     case 'Dinosaur':
//     default:
//         console.log('This animal won\'t go home');        
// }

console.log('______#####________')
//Eror handling
function takeDay(dayVar) {
    const dayIndex = dayVar - 1;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    if (days[dayIndex]) {
        return days[dayIndex];
    }else {
        throw 'Invalid day index';
    }
}

try {
    const dayName = takeDay(22);
}catch(e) {
    console.log(e);
}
console.log('______************************************************________')
try {
    console.log('Start of try runs');

    unicycle;

    console.log('End of try runs -- never reached');

}catch(err) {
    console.log('Error has occured: ' + err.stack);
} finally {
    console.log('This is always run');
}

console.log('...Then the execution continues');

console.log('______************************************************________')

let json = '{ "age": 30 }';

try {
    let user = JSON.parse(json);
    if(!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }
    
    console.log( user.name );
}catch(er) {
    console.log( "JSON EROR: " + er );
}

console.log('______************************************************________')






