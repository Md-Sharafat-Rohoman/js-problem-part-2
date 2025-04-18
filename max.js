let sharafat = 50;
let fariha = 300;
if(sharafat > fariha){
    console.log('sharafat rohoman is a good student',sharafat);
}
else{
    console.log('fariha is a good student',fariha);
}

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log('max number is a',getMax(39,56))