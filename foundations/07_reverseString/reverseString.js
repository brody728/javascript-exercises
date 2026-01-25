const reverseString = function(str) {
    let outputStr = '';
    for (let i = 0; i < str.length; i++) {
        outputStr = str.charAt(i) + outputStr;
    }

    return outputStr;
};

// Do not edit below this line
module.exports = reverseString;
