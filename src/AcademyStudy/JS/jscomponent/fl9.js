let quantity = prompt("Please enter your quantity");

let price = 1000;
let discount = 0;

if (quantity < 10 ) {
    discount = 400;
} else {
    discount = 1000;
}

discount = quantity < 10 ? 400 : 1000;