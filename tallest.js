const height = [64, 33, 23, 45, 67, 89];

function getMax(number) {
    let max = number[0];
    for (const num of number) {
        if (num > max) {
            max = num;
        }
        return max;
    }
}
console.log('max value is', getMax(height));