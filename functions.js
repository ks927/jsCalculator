
// add
function add(storedVal,firstVal) {
   return +storedVal + +firstVal;
}

// subtract
function subtract(a,b) {
    return +a - +b;
}

// multiply
function multiply(a,b) {
    return +a * +b;
}

// divide
function divide(a,b) {
    return +a / +b;
}

// equals
function equals(storedVal, firstVal, operation) {
    console.log( operation)
    if(operation == '+') {
        return add(storedVal,firstVal);
        console.log(firstVal);
    }
    else if(operation == '-') {
        return subtract(storedVal, firstVal);
        console.log(firstVal);
    }
    else if(operation == '*') {
        return multiply(storedVal,firstVal)
    }
    else if(operation == '/') {
        return divide(storedVal,firstVal)
    }
    else {
        return "0";
    }
}

// all numbers clicked BEFORE operation will be firstNum
// operation will be the function passed
// all numbers clicked AFTER operation 
// and BEFORE equals will be storedNum
// equals will fire the equals() function 


// listeners
const display = document.querySelector('.display');
let firstNum = "";
let storedNum = "";
let operator = "";

function clearScreen(){
    display.innerHTML = "";
    firstNum = "";
    storedNum = "";
    operator = "";
}

function calculate(e) {
    if (e.target.className === 'number') {
        firstNum += e.target.innerText;
        display.innerHTML = firstNum;
}
    // if operator clicked
    if (e.target.className === 'operator') {
        // if there is not a stored number
        if (storedNum === "") {
            let sign = e.target.innerText;
            display.innerHTML = sign;
            operator = sign;
            storedNum = firstNum;
            firstNum = "";
        } else {
            //if there is a stored number
            result = equals(storedNum, firstNum, operator);
            let sign = e.target.innerText;
            operator = sign;
            firstNum = "";
            display.innerHTML = result;
            storedNum = result;
        }
    } 
    // equals sign clicked
    else if (e.target.className === 'equals') {
        if (storedNum == "" || firstNum == "") {
            console.log(firstNum, storedNum);
            clearScreen();
        } else {
        result = equals(storedNum, firstNum, operator);
        display.innerHTML = result;
        storedNum = result;
        }
        
    } else if (e.target.className === 'clear') {
        clearScreen();
    }
    
}

window.addEventListener("click", calculate)

