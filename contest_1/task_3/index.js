// given a word, len between 3 and 50. Return the middle char if odd, middle 2 if even

function getMiddle(str) {
    const len = str.length;
    const mid = Math.floor(len / 2);
    if (len % 2 === 0) {
        return str.slice(mid - 1, mid + 1);
    }
    return str[mid];
}

let cnt, res;
process.stdin.on('data', data => {
    res = getMiddle(data.toString());
    process.stdout.write(res + '');
    process.exit();
});