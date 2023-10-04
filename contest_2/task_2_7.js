function nextSquare(n) {
    let root = Math.sqrt(n);

    if (Number.isInteger(root)) {
        return Math.pow(root + 1, 2);
    }

    return -1;
}

let cnt, res;
process.stdin.on('data', data => {
    res = nextSquare(data.toString());
    process.stdout.write(res + '');
    process.exit();
});