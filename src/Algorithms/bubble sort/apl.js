// 1.It is not good decision,but it works:)
// var ar = [2,4,3];
// function bubbleSort(ar) {
//     var i, j, lim;
//     lim = ar.length; 
//     while(lim--) {
//         for(i = 0, j = 1; i < lim; ++i, ++j) {
//             if(ar[i] > ar[j]) {
//                let temp = ar[i]; 
//                 ar[i] = ar[j];
//                 ar[j] = temp;
//             }
//         }
//     }
//     return ar;
// }
// console.log(bubbleSort(ar));
// 2. I think the best decision, but 1 is faster.
let array = [1,3,5,6,9,10,8,4,2,7];
let swapped;

function bubbleSort2(arr) {
    swapped = false;
    let end = arr.length - 1;

    for(let i = 0, j = 1; i < end; i++, j++) {
        if(arr[i] > arr[j]) {
            swapped = true;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    end --;
}
do {
    bubbleSort2(array);
} while(swapped);

console.log(array);