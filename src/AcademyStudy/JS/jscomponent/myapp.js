var sugar = prompt("how many spoon of sugar, do you want?");
var milk = prompt("how many percent of milk, do you want?");

function makeCofee( sugar, milk ) {
    var instructions = "Boil water,"; 
    instructions += " pour into coup"; 
    instructions += " add coffee granules"; 
    instructions += " add coffee granules"; 
    instructions += " add "+ sugar + " spoons of sugar,"; 
    instructions += " add "+ milk + "% milk.";
    return instructions; 
}
document.write( makeCofee(sugar, milk) );