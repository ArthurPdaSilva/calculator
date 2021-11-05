// Variable
let field = document.querySelector("input.field");
let testValue = ['*','/','.',')'];
let initValue = ['+','-','*','/','.']

// Calculator System
function calc(x){
    field.value += x;
}

// Verified of the value
// testValue.push('.', '*', '/', '(', ')', '-', '+');
function operator(y = 0){
    if(field.value.length == 0 && testValue.includes(y)){ //2s
        return false;                                     //1s
        
    }
    let penultimate = field.value[field.value.length-1]  //2s
    if(initValue.includes(penultimate) && y !='('){  //2s
        return false; //1s
    }
    if(penultimate=='(' && y=='.'){ //2s
        return false;  //1s
    }
    if(penultimate=='(' && y=='(' ||
    penultimate==')' && y==')'){ //4s
        return false;  //1s
    }
    field.value += y; //1s

    //17 sec
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