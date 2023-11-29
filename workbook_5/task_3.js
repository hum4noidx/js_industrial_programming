const indexesWhere = (arr, predicate) => {
    // Use map to create an array of index-value pairs
    const indexValuePairs = arr.map((element, index) => ({ index, element }));

    // Use filter to get only the pairs where the predicate function is true
    const matchingPairs = indexValuePairs.filter(pair => predicate(pair.element));

    // Use map again to extract the indexes from the matching pairs
    const indexes = matchingPairs.map(pair => pair.index);

    return indexes;
};

// Example usage
const array = [1, -2, 3, -4, 5, -6];
const positiveIndexes = indexesWhere(array, x => x > 0);

console.log(positiveIndexes); // Output: [0, 2, 4]
