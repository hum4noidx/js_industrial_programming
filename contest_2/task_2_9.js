function isMountainArray(arr) {
    if (arr.length < 3) return false;

    let increasing = true;

    for (let i = 1; i < arr.length; i++) {
        if (increasing) {
            if (arr[i] <= arr[i - 1]) {
                if (i === 1) return false;
                increasing = false;
            }
        } else {
            if (arr[i] >= arr[i - 1]) {
                return false;
            }
        }
    }

    return !increasing;
}

function findMountainPeak(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

// Функция для чтения и вывода результатов
function processInput(input) {
    const arr = input.split(' ').map(Number);
    if (isMountainArray(arr)) {
        const peakIndex = findMountainPeak(arr);
        return `yes ${peakIndex}`;
    } else {
        return 'no';
    }
}

let cnt, res;
process.stdin.on('data', data => {
    res = processInput(data.toString().replace('\r\n', ''));
    process.stdout.write(res + '');
    process.exit();
});