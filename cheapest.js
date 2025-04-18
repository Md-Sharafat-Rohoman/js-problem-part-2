const phones = [
    {name:'samsung', price:20000, camera:'12mp', color:'black'},
    {name:'xoami', price:21000, camera:'22mp', color:'black'},
    {name:'oppo', price:30000, camera:'15mp', color:'black'},
    {name:'iphone', price:28000, camera:'20mp', color:'black'},
    {name:'walton', price:54000, camera:'50mp', color:'black'},
    {name:'htc', price:34000, camera:'10mp', color:'black'},
]
function getCheapestPhone(phones){
    // console.log(phones)
    let min = phones[0]
    for(const phone of phones){
        // console.log('phone',phone)
        if(phone.price > min.price){
            min = phone;
        }
    }
    return min;
}
console.log(getCheapestPhone(phones));