// create a function to read the input from the user and form an array. Use space as delimiter. Filter an array to remove all strings. Output each element of the array with a space in between.
// exclude strings starting with a zero.

const filterArray = (data) => {
    let arr = data.toString().split(' ');
    let res = [];
    for (let el of arr) {
        if (el[0] !== '0' && !isNaN(el)) {
            res.push(el);
        }
    }
    return res.join(' ');
}
let cnt, res;
process.stdin.on('data', data => {
    res = filterArray(data);
    process.stdout.write(res + '');
    process.exit();
});