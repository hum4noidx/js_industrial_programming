// write a function to separate camelCase text into two words
// e.g. "camelCase" -> "camel case"

function splitCamelCase(str) {
    return str.replace(/([A-Z])/g, ' $1').trim();
}

let cnt, res;
process.stdin.on('data', data => {
    res = splitCamelCase(data.toString());
    process.stdout.write(res + '');
    process.exit();
});