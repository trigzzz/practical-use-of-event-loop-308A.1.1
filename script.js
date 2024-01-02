// Part 1: Stack Overflow
// Global counter variable
let counter = 0;

// Function that increments the variable then calls itself recursively
function recursiveFunction() {
  counter++;
  recursiveFunction();
}

// Surround the initial function call in a try/catch block
try {
  recursiveFunction();
} catch (error) {
  // Log the error and the value of the counter variable
  console.error(`Error: ${error.message}`);
  console.log(`Counter value when stack overflow occurred: ${counter}`);
}



