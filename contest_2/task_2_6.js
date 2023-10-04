// create a funtion that takes an integer and returns an array with all its divisors. If the number is prime, return the string '(integer) is prime'
// 16 - [2,4,8]

let divisors = (n) => {
    let divs = [];
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            divs.push(i);
        }
    }
    if (divs.length === 0) {
        return n + " является простым";
    } else {
        return `[${divs.join(' ')}]`;
    }
}

let cnt, res;
process.stdin.on('data', data => {
    res = divisors(data);
    process.stdout.write(res + '');
    process.exit();
});