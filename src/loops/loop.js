// const factorial = (n) => {
//     let counter = 1;
//     let result = 1;

//     while (counter <= n) {
//         counter = counter + 1;
//         result = result * counter;
//     }
//     return result;
// }

// console.log(factorial(2));

// const smallestDivisor = (num) => {
//     if (num < 1) {
//         return NaN;
//     }
//     if (num === 1) {
//         return num;
//     }
//
//     let divisor = 2;
//
//     while (num % divisor !== 0) {
//         divisor = divisor + 1;
//     }
//
//     return divisor;
// };
// console.log(smallestDivisor(121));

const factorial = (n) => {
    let result = 1;

    for (let index = 1; index <= n; index++) {
        result *= index;
    }
    return result;

}
console.log(factorial(2));
