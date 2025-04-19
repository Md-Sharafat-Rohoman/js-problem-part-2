function add(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1-num2;
}

function multip(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function calculator(a,b,operation){
    if(operation === 'add'){
        const result = add(a+b);
        return result;
    }
    else if(operation === 'substract'){
        const result = substract(a,b);
        return result;
    }
    else if(operation === 'multip'){
        const result = multip(a,b)
        return result;
    }
    else if(operation === 'divide'){
        const result = divide(a,b);
        return result;
    }
    else{
        return "only 'add' , 'substract' , 'divide' , 'operation is allowed"
    }
}

console.log(calculator(4,6,'multip'))