isPangram = (sentence) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowerCased = sentence.toLowerCase();
    for (let char of alphabet) {
        if (!lowerCased.includes(char)) {
            return "no";
        }
    }
    return "yes";
}

let cnt, res;
process.stdin.on('data', data => {
    res = isPangram(data.toString());
    process.stdout.write(res + '');
    process.exit();
});