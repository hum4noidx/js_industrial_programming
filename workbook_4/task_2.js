function nextFloat(n) {
    return n + Number.EPSILON;
}


console.log(nextFloat(1));
console.log(nextFloat(2));
console.log(nextFloat(3));
console.log(nextFloat(4));