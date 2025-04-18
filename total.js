const products = [
    {name:'shampoo', price:300},
    {name:'chiruni', price:100},
    {name:'shirt', price:700},
    {name:'pant', price:1200}
]
function getShoppingTotal(products){
    for(const product of products){
        console.log(product);
    }
}
console.log('get shopping total', getShoppingTotal(products));