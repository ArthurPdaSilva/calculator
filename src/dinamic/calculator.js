// Variable
let field = document.querySelector("input.field");
let testValue = [];

// Calculator System
function calc(x){
    if(verified(x)){
        testValue.push(x);
        field.value += x;
    }else{
        return false;
    }
    console.log(testValue);
}

function verified(x){
    if(testValue.indexOf(x) == -1){
        return true;
    }else{
        switch (x) {
            case '.':
                return false;
            case '(':
                return false;
            case ')':
                return false;
            case '+':
                return false;
            case '-':
                return false;
            case '*':
                return false;
            case '/':
                return false;
                    
            default:
                return true
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

}