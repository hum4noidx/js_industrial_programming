const reverse = (data) => {
    let arr = data.toString();

    let numb_array = [];

    for(let item of arr) {
        if(!isNaN(Number.parseInt(item)))
            numb_array.push(Number.parseInt(item));
    }

    numb_array = numb_array.filter(x => Number.isInteger(x)).reverse();

    return `[${numb_array.join(', ')}]`;
};
let cnt, res;
process.stdin.on('data', data => {
    res = reverse(data);
    process.stdout.write(res + ''); //
    process.exit();
});