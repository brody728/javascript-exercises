const removeFromArray = function(arr) {
    const argArray = Array.from(arguments);
    const itemsToRemove = argArray.slice(1);

    return arr.filter((item) => !(argArray.includes(item)));
};

// Do not edit below this line
module.exports = removeFromArray;
