// var sugar = prompt("how many spoon of sugar, do you want?");
// var milk = prompt("how many percent of milk, do you want?");

// function makeCoffee( sugar, milk ) {
//     var instructions = "Boil water,"; 
//     instructions += " pour into coup"; 
//     instructions += " add coffee granules"; 
//     instructions += " add coffee granules"; 
//     instructions += " add "+ sugar + " spoons of sugar,"; 
//     instructions += " add "+ milk + "% milk.";
//     return instructions; 
// }
// document.write( makeCoffee(sugar, milk) );

var car = {
  make: "volvo",
  speed: 160,
  engine: {
      size: 2.0,
      make: "bmw",
      fuel: "petrol",
      pistons: [ {maker: "BMW"}, {maker: "BMW"} ]
  },
  drive: function(){return "drive";}
};
var array = [
    "string",
    100,
    ["embeded", 200],
    {car: "ford"},
    function(){return "drive";}
]
