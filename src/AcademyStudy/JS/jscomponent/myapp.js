// var sugar = prompt("how many spoon of sugar, do you want?");
// var milk = prompt("how many percent of milk, do you want?");

function makeCoffee( sugar, milk ) {
        var instructions = "Boil water,"; 
    instructions += " pour into coup"; 
    instructions += " add coffee granules"; 
    instructions += " add coffee granules"; 
    instructions += " add "+ sugar + " spoons of sugar,"; 
    instructions += " add "+ milk + "% milk.";
    return instructions; 
}
document.write( makeCoffee(sugar, milk) );


var n = prompt('Enter value for varification');
function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    alert(isNumeric(n));
    
var price1 = 0.1;
var price2 = 0.2;

alert( +(price1 + price2).toFixed(2));

// var i = 0;
// while (i < 11) {
    //   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }
// var car = {
//     make: "volvo",
//     speed: 160,
//     engine: {
//         size: 2.0,
//         make: "bmw",
//         fuel: "petrol",
//         pistons: [ {maker: "BMW"}, {maker: "BMW"} ]
//     },
//     drive: function(){return "drive";}
// };

//     var array = [
//             "string",
//             100,
//             ["embeded", 200],
//         {car: "ford"},
//         function(){return "drive";}
//     ]

// function print_object(obj) {
//     var res = '<ul>';

//     for(i in obj){
//         res += '<li><b>' + i + '</b>: ' + obj[i] + '</li>';
//     }
//     res += '</ul>'
//     document.write(res);
// }
// // print_object(textJs);

// var text = document.querySelector('#textJs');

// text.onclick = function() {
//     text.innerHTML= 'Javascript Native';
//     text.className = 'test';
//     text.style.color = "red";
// }

// function pow2() {
//     alert(document.getElementById("numberToSquare").value * document.getElementById("numberToSquare").value);
// }

var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var images = document.querySelectorAll('#gallery .images img');

var i = 0;

btn_prev.onclick = function() {
    images[i].className = '';
    i--;

    if(i < 0) {
        i = images.length - 1;
    }
    images[i].className = 'showed';
}
btn_next.onclick = function() {
    images[i].className = '';
    i++;

    if(i >= images.length) {
        i = 0;
    }
    images[i].className = 'showed';
}

window.onload = function() {
    var div = document.querySelector('#items .item');
    var timer = new timerOn(10,div);

    setInterval(function(){
        timer.tick();
    }, 1000);
     
    function timerOn(time, elem) {
        this.time = time;
        this.elem = elem;

        this.tick = function() {
            this.time--;
            this.elem.innerHTML = this.time;
            if(this.time < 0){
                this.time = 0;
                alert('stop');
            }
        }
    }
}

