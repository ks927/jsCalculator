// add
function add(a,b) {
   return Number(a) + Number(b);
}

// subtract
function subtract(a,b) {
    return Number(a) - Number(b);
}

// multiply
function multiply(a,b) {
    return Number(a) * Number(b);
}

// divide
function divide(a,b) {
    return Number(a) / Number(b);
}

// equals
function equals(storedVal, firstVal, operation) {
    if(operation == "+") {
        return add(storedVal,firstVal)
    }
    else if(operation == "-") {
        return subtract(storedVal, firstVal)
    }
    else if(operation == "*") {
        return multiply(storedVal,firstVal)
    }
    else if(operation == "/") {
        return divide(storedVal,firstVal)
    }
}

// all numbers clicked BEFORE operation will be a
// operation will be the function passed
// all numbers clicked AFTER operation 
// and BEFORE equals will be b
// equals will fire the equals() function 


// listeners
//const key;
const display = document.querySelector('.display');
let firstNum = "";
let storedNum = "";
let operator = "";

function calculate(e) {
    if (e.target.className === 'number') {
        // if there hasn't been an operator clicked
        if (operator === "") {
            let number = e.target.innerHTML;
            firstNum += number;
            display.innerHTML = firstNum;
        // if there is an operator
        } else {
            let number = e.target.innerHTML
            storedNum = firstNum;
            firstNum = "";
            firstNum += number 
            display.innerHTML = firstNum;
            console.log(storedNum);
            console.log(firstNum);
        }
    }
    // if operator clicked
    else if (e.target.className === 'operator') {
        // if there is already a first number
        if (storedNum === "") {
            let sign = e.target.innerHTML;
            display.innerHTML = sign;
            // store the first number and clear it
            operator = sign;
            console.log(firstNum);
        } else {
            //if there is a firstNum
            let sign = e.target.innerHTML;
            operator = sign;
            equals = equals(storedNum, firstNum, operator);
            display.innerHTML = equals;
            //storedNum = equals;
            //firstNum = "";
        }
    } 
    // equals sign clicked
    else if (e.target.className === 'equals') {
        let equals = equals(storedNum, firstNum, operator);
        display.innerHTML = equals;
        storedNum = equals;
        console.log(storedNum + operator + firstNum );
        console.log(equals);
        //console.log(operator);
        
    } else if (e.target.className === 'clear') {
        display.innerHTML = "";
        firstNum = "";
        storedNum = "";
        operator = "";
        console.log(e.target.className);
    }
    
}

window.addEventListener("click", calculate)

