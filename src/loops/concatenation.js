// const skip = (str) => {

//     let i = 0;
//     let result = '';


//     while (i < str.length) {
//         result = result + str[i];
//         i = i + 2;
//     }
//     return result;
// }

// console.log(skip('Hello, World'));

// console.log('world'[2] + 'world'[3] === 'world'[3] + 'world'[2]);
// console.log(`${'world'[1]}${'world'[3]}` === `${'world'[1]}${'word'[3]}`);
// console.log(`${'world'[3]}${'world'[2]}` === 'world'[3] + 'world'[2]);
// console.log('a' + 'b' === 'b' + 'a');

// const reverse = (str) => {
//
//     let i = 0;
//     let result = '';
//
//     while(i < str.length - 1) {
//       result = result - str[i];
//       i = i + 1;
//     }
//     return result;
//   }
// console.log(reverse('hello, world!'));


// const reverse = (str) => {
//
//     let i = str.length;
//     let j = 0;
//     let result = '';
//
//     while(i >= 0) {
//       i = i - 1;
//       j = j + 1;
//       result = result + str[i];
//     }
//     return result;
//   }


  const reverse = (str) => {
  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    result = result + str[i];
    i = i - 1;
  }

  return result;
};

console.log(reverse('hello, world!'));
