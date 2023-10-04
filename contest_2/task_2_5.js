// write an arrow func to calculate the number of divisors of a positive integer (including 1 and the number itself)
// 12 -> 6

const divisors = (num) => {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            cnt++;
        }
    }
    return cnt;
}

let cnt, res;
process.stdin.on('data', data => {
    res = divisors(data.toString());
    process.stdout.write(res + '');
    process.exit();
});