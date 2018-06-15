// const factorial = (n) => {
//     if(n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// alert(factorial(3));


// iter

// const factorial = (n) => {
//     const iter = (current,acc) => {
//         if (current === 0) {
//             return acc;
//         }
//         return iter (current -1, acc * current);
//     }
//     return iter(n,1);
// }
// console.log(factorial(4));
// sequenceSum
// const sequenceSum = (begin,end) => {
//     if (begin > end) {
//         return NaN;
//     }else if(begin === end){
//         return begin;
//     }else {
//         return begin + sequenceSum(begin + 1, end);
//     }
// }
// console.log(sequenceSum(1,5));

//fibonacci
// let fibonacci = (n) => {
//     // console.log(n);
//     if(n < 2) {
//         return n;
//     } else {
//         return (fibonacci(n-1) + fibonacci(n-2));
//     }
// }
// console.log(fibonacci(2));

// count
// const count = (c) => {
//     console.log(c);
//     if(c <= 1 ) {
//         return;
//     } else {
//         count(c - 1);
//     }
// }
// count(5);

// smallestDivisor
const smallestDivisor = (num) => {
    const iter = (acc) => {
        if(acc > num / 2){
            return num;
        } else if (num % acc === 0) {
            return acc;
        }
        return iter(acc + 1);
    }
    return iter(2);
};

console.log(smallestDivisor(9));

// const factorial = (n) => {
//     const iter = (current,acc) => {
//         if (current === 0) {
//             return acc;
//         }
//         return iter (current -1, acc * current);
//     }
//     return iter(n,1);
// }
// console.log(factorial(4));
