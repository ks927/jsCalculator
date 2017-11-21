// add
function add(a,b) {
   return a + b
}

// subtract
function subtract(a,b) {
    return a - b
}

// multiply
function multiply(a,b) {
    return a * b
}

// divide
function divide(a,b) {
    return a / b
}

// equals
function equals(a, b, operation) {
    return operation(a,b)
}

// all numbers clicked BEFORE operation will be a
// operation will be the function passed
// all numbers clicked AFTER operation 
// and BEFORE equals will be b
// equals will fire the equals() function


// listeners
document.body.addEventListener("click", event => {
    console.log(event.target.textContent);
});
