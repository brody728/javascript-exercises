const repeatString = function(str, repititions) {
    if (repititions < 0) return 'ERROR';
    
    let outputStr = ''
    for (let i = 0; i < repititions; i++) {
        outputStr += str;
    }
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
