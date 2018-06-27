// It is not good decisaion,but it works:)
var ar = [2,4,3];
function bubbleSort(ar) {
    var i, j, lim;
    lim = ar.length; 
    while(lim--) {
        for(i = 0, j = 1; i < lim; ++i, ++j) {
            if(ar[i] > ar[j]) {
               let temp = ar[i]; 
                ar[i] = ar[j];
                ar[j] = temp;
            }
        }
    }
    return ar;
}
console.log(bubbleSort(ar));