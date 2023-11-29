function findUnicodeCharacters() {
    // Array to store Unicode characters that break up into two or more ASCII characters
    const result = [];

    // Iterate through Unicode code points
    for (let codePoint = 0; codePoint <= 0x10FFFF; codePoint++) {
        const unicodeChar = String.fromCodePoint(codePoint);

        // Normalize using NFKC and NFKD forms
        const normalizedKC = unicodeChar.normalize('NFKC');
        const normalizedKD = unicodeChar.normalize('NFKD');

        // Check if the normalized strings contain ASCII characters
        if (containsASCII(normalizedKC) || containsASCII(normalizedKD)) {
            result.push(unicodeChar);
        }
    }

    return result;
}

function containsASCII(str) {
    // Check if the string contains any ASCII characters
    return /^[\x00-\x7F]+$/.test(str);
}

// Example usage
const unicodeCharacters = findUnicodeCharacters();
console.log(unicodeCharacters);
