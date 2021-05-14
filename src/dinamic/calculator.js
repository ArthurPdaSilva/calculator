// Variable
let field = document.querySelector("input.field");
let testValue = [];

// Calculator System
function calc(x){
    testValue = [];
    field.value += x;
}

// Verified of the value
// testValue.push('.', '*', '/', '(', ')', '-', '+');

function operator(y = 0){
    if(field.value.length == 0){
        if(y == '*' || y == '/' || y == '.' || y == ')' || y == '+'){
            return false;
        }else{
            testValue.push('-', '(');
            field.value += y;
        }
    }else{
        if(testValue.includes(y)){
            return false;
        }else{
            field.value += y;
            if(y == '*' || y == '/'){
                testValue.push('*', '/', '.');
            }else if(y == '+' || y == '-'){
                testValue.push('-', '+', '.');
            }else if(y == ')' || y == '('){
                testValue.push('(', ')', '.');
            }
            // testValue.push('.', '*', '/', '-', '+');
        }
    }
}

// Clear the Field
let button = document.querySelector("button.clear").addEventListener('click', () => {
    testValue = [];
    field.value = '';
})


// Show the result
function result(){
    let result = eval(field.value);
    field.value = result == undefined ? '' : result;
}