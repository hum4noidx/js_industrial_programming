var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    const params = line.split(' ').map(Number);

    const doubleNumber = Random.nextDouble(params[0], params[1]);
    const intNumber = Random.nextInt(params[2], params[3]);
    const element = Random.nextElement(params.slice(4));

    console.log(doubleNumber);
    console.log(intNumber);
    console.log(element);

    rl.close();
});


class Random {
    static nextDouble(low, high) {
        return Math.random() * (high - low) + low;
    }

    static nextInt(low, high) {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    static nextElement(array) {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }
}
