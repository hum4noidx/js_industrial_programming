const getAllIndexes = (arr, value) => {
    // Use map to create an array of index-value pairs
    const indexValuePairs = arr.map((element, index) => ({ index, element }));

    // Use filter to get only the pairs where the element is equal to the given value
    const matchingPairs = indexValuePairs.filter(pair => pair.element === value);

    // Use map again to extract the indexes from the matching pairs
    const indexes = matchingPairs.map(pair => pair.index);

    return indexes;
};

// Example usage
const array = [1, 2, 3, 4, 2, 5, 2, 6, 2];
const valueToFind = 2;

const result = getAllIndexes(array, valueToFind);
console.log(result); // Output: [1, 4, 6]
