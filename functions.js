// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting(name) {
    console.log(`Why Hello ${name}!`);
}
printGreeting("Sir Lancelot")

// 2: Write a function that accepts 1 argument. 
//The function should console.log a sentence that interpolates the data 
//passed in.

function moveReaction(player) {
    console.log(`Great move ${player}`);
}
moveReaction("Shaq")

// 3: Write a function that has 3 parameters: a string and two numbers. The 
// String will be the name of a company, and the numbers will represent the 
// minimum and maximum of a pay range for a posted job. The function should 
// print out a sentence that includes the name of the company and the range 
//itself (if the numbers passed in are 90000 and 110000, the pay range is
// 20000).

function payRange(company, maxRange, minRange) {
    var sum = maxRange - minRange;
    console.log(`This ${company} company has a maximum of ${maxRange} dollars and a minimum of ${minRange} , the pay range is ${sum} `);
}
payRange("Nike", 110000, 90000)

// 4: Write a function that satifies the following interaction pattern:

function checkStock(quantity, item) {
    if (quantity > 4) {
        console.log(`${item} - is stocked!`);
    } else if (quantity > 0) {
        console.log(`${item} - Running LOW`);
    } else {
        console.log(`${item} - out of STOCK!`);
    }
    }
    checkStock(4, "Coffee");
    checkStock(3, "Tortillas");
    checkStock(0, "Cheese");
    checkStock(1, "Salsa");

// => "Coffee is stocked"
// => "Tortillas - running LOW"
// => "Cheese - OUT of stock!"
// => "Salsa - running LOW"