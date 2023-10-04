// write a function to return century from year

let centuryFromYear = (year) => {
    if (year % 100 === 0) {
        return year / 100;
    }
    return Math.floor(year / 100) + 1;
}

let cnt, res;
process.stdin.on('data', data => {
    res = centuryFromYear(data);
    process.stdout.write(res + '');
    process.exit();
});