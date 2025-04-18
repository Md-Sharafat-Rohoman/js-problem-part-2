const products = [
    {name:'shampoo', price:300},
    {name:'chiruni', price:100},
    {name:'shirt', price:700},
    {name:'pant', price:1200}
]
function getShoppingTotal(products){
    let sum = 0;
    for(const product of products){
        console.log(product)
        sum = sum + product.price
    }
    return sum;
}
console.log('get shopping total', getShoppingTotal(products));