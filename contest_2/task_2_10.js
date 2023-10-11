function countSmaller(nums) {
    const counts = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }
        counts.push(count);
    }
    return `[${counts.join(', ')}]`;
}

function processInput(input) {
    const nums = input.split(' ').map(Number);
    return countSmaller(nums);
}

let cnt, res;
process.stdin.on('data', data => {
    res = processInput(data.toString().replace('\r\n', ''));
    process.stdout.write(res + '');
    process.exit();
});