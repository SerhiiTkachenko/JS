// const factorial = (n) => {
//     if(n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// alert(factorial(3));

const sequenceSum = (begin,end) => {
    if (begin > end) {
        return NaN;
    }else if(begin === end){
        return begin;
    }else {
        return begin + sequenceSum(begin + 1, end);
    }
}
console.log(sequenceSum(-3,2));