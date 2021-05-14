// Variable
let field = document.querySelector("input.field");
let testValue = ['-','+','*','/','.',')'];

// Calculator System
function calc(x){
    field.value += x;
}

// Verified of the value
// testValue.push('.', '*', '/', '(', ')', '-', '+');
function operator(y = 0){
    if(field.value.length == 0 && testValue.includes(y)){
        return false;
        
    }
    field.value += y;
    
}

// Clear the Field
let button = document.querySelector("button.clear").addEventListener('click', () => {
    field.value = '';
})


// Show the result
function result(){
    let result = eval(field.value);
    field.value = result==undefined?'':result;
}
