// create arrow function which return odd or even

let addOrEven = (num) => {
    if (num % 2 === 0) {
        return 'Even';
    }
    return 'Odd';
}

let cnt, res;
process.stdin.on('data', data => {
    res = addOrEven(data);
    process.stdout.write(res + '');
    process.exit();
});