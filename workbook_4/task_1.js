function getExponent(num) {
    let low = -324, high = 309;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = num / Math.pow(10, mid);
        if (guess >= 1 && guess < 10) {
            return mid;
        } else if (guess < 1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

console.log(getExponent(1.23e6));
console.log(getExponent(3.45e-7));
console.log(getExponent(6.78e0));