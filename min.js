const height = [64, 33, 23, 45, 67, 89];

function getMinNumber(number) {
    // console.log(number);
    let min = number[0]
    for (const num of number) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
console.log(getMinNumber(height));