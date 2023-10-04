function canFormTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return false; // Проверяем, что все стороны положительны
    return (a + b > c) && (a + c > b) && (b + c > a);
}

let cnt, res;
process.stdin.on('data', data => {
    res = canFormTriangle(data.toString().split(' ').map(Number));
    process.stdout.write(res + '');
    process.exit();
});