// Each example below has at least one opportunity for improvement.


// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
console.log("Hello, what is your name?")
}
nameQuestion()

// Indentation on line 13.Semi-colons after console.log parethesis.
// Called the function after console.log code-block 


// EX 2:
function sum(first, second, third) {
var sum = first + second + third
console.log(sum);
 }

sum(1, 2, 3);
sum(4, 2, 7);

// Indentation of the closing curly-bracket.The console.log "(sum)"
// is not defined in our function. Changed function to match what we are logging "sum."
// Changed the Invoke/Call command to match our function.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// Completed the ( func "function") command to start our function command properly.
// Added a space between the open/close parathesis and open-curly bracket after keyword input.
//moved the closing-curly bracket to correct indentation below code-block 
// (line 40 to 41).


//  EX 4:
function sum(num1, num2) {
var sum = num1 + num2;
var avg = sum / 2;

  console.log(`the average is: ${avg}`);
  }
  sum(3, 4)

// Changed the Function keyword to match with code-block "sum".
// Moved open-curly bracketfrom line 53 to line 52 to initiate proper 
//code-block syntax.
// removed the period at the end of the string interpolation.Proper Syntax?
// Proper indentation on of declared variable line 54 
// Call the function after the code-block with numeral input between parethesis.