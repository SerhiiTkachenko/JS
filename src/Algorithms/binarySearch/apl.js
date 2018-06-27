let array = [12,122,32,10,13,14,15,31,30];

function binarySearch(arr, value) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;

    while ( low <= high ) {
        mid = Math.floor((high + low) / 2);
        // middle == value being searched
        if(arr[mid] == value) {
            return arr[mid];
        }else if (value > arr[mid]) {
            //move the low up one
            low = mid + 1;
        } else {
            //move the high down one
            high = mid - 1;
        }
    }
    return -1;
}

let sorted = array.sort(function(a,b) {return a-b});
console.log(sorted);

let foundSearch =  binarySearch(sorted,10);

console.log(foundSearch);