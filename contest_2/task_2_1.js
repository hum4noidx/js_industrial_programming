// create a function which calculate average of all numbers in array. Empty array should return 0. Array is presented like string with spaces
// 1 2 3 4 5 6 7 8 9 10

const average = (data) => {
    let arr = data.toString().split(' ');
    let sum = 0;
    for (let el of arr) {
        sum += +el;
    }
    return sum / arr.length;

}

let cnt, res;
process.stdin.on('data', data => {
    res = average(data);
    process.stdout.write(res + '');
    process.exit();
});