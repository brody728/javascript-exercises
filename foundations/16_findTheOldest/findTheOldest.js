const findTheOldest = function(peopleArr) {
    const CURRENTYEAR = 2026;
    let oldestPerson;
    let oldestPersonAge = 0;
    for (person of peopleArr) {
        let age;
        if (!person.yearOfDeath) {
            age = CURRENTYEAR - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age > oldestPersonAge) {
            oldestPerson = person;
            oldestPersonAge = age;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
