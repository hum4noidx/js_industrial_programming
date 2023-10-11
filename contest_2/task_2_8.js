function canFormTriangle(edges) {
    let a = edges[0];
    let b = edges[1];
    let c = edges[2];
    if (a <= 0 || b <= 0 || c <= 0) return false;
    return (a + b > c) && (a + c > b) && (b + c > a);
}


let cnt, res;
process.stdin.on('data', data => {
    res = canFormTriangle(data.toString().replace('\r\n', '').split(' ').map(Number));
    process.stdout.write(res + '');
    process.exit();
});