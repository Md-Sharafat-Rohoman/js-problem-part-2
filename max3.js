const sharafat = 10;
const rohoman = 20;
const zafourllah = 30;
if(sharafat > rohoman && sharafat > zafourllah){
    
    console.log('sharafat is a good boy',sharafat)
}
else if(rohoman > sharafat && rohoman > zafourllah){
    console.log('rohoman is a midium student')
}
else{
    console.log('zafourllah is a best cricket commentitor of bangladesh',zafourllah)
}


function max3(num1, num2,num3){
    if(num1>num2 && num1 > num3){
        return num1;
    }
    else if(num2>num1 & num2>num3){
        return num2;
    }
    else{
        return num3
    }
}
console.log('thats max number is',max3(3,5,6));