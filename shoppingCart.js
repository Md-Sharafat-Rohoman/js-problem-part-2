const products = [
    {name:'shampoo', price:300, quantity: 3},
    {name:'chiruni', price:100, quantity: 2},
    {name:'shirt', price:700, quantity: 5},
    {name:'pant', price:1200, quantity: 7}
]
function cartTotal(products){
    // console.log(products)
    let sum = 0;
    for(const product of products){
        const productPrice = product.price;
        const productQuantity = product.quantity;
        const totalPrice = productPrice*productQuantity;
        console.log(productPrice, productQuantity, totalPrice);
        sum = sum + totalPrice;
        // console.log(sum)
    }
    return sum;
    
}
console.log('cart total', cartTotal(products))