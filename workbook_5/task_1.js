const comparePeople = (person1, person2) => {
    // Compare last names
    const lastNameComparison = person1.lastName.localeCompare(person2.lastName);
    // The localeCompare method returns a negative number
    // if the calling string (in this case, person1.lastName) is sorted before the argument
    // (person2.lastName), a positive number if it's sorted after,
    // and 0 if the two strings are equal.
    
    // If last names are different, return the result
    if (lastNameComparison !== 0) {
        return lastNameComparison;
    }

    // Last names are the same, compare first names
    return person1.firstName.localeCompare(person2.firstName);
};
const people = [
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "John", lastName: "Doe" },
];

people.sort(comparePeople);

console.log(people);
