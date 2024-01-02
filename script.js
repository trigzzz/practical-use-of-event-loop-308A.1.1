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

// Part 2: Trampolines


 // Recursive function to flatten nested arrays
 
const flattenRecursive = (arr, result = []) => {
    for (const element of arr) {
      if (Array.isArray(element)) {
        flattenRecursive(element, result);
      } else {
        result.push(element);
      }
    }
    return result;
  };
  
  // Function for trampolining

  const flattenTrampolined = (arr, result = []) => {
    const flattenStep = (arr, result) => {
      for (const element of arr) {
        if (Array.isArray(element)) {
          return () => flattenStep(element, result);
        } else {
          result.push(element);
        }
      }
      return result;
    };
  
    return () => flattenStep(arr, result);
  };
  
  
   // Create a trampoline function

  const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  };
  
   
  const nestedArray = [1, [2, [3, 4, [5, 6]], 7], 8, [9, 10]];
  const flattenedArray = trampoline(flattenTrampolined(nestedArray));
  console.log(flattenedArray);
  