const palindromes = function (x) {
    const regexp = /[a-z1-9]{1}/g
    let onlyLetters = Array.from(x.toLowerCase().matchAll(regexp), m => m[0]);

    console.log(onlyLetters);
   
    for (let i = 0; i < onlyLetters.length / 2; i++) {
        if (onlyLetters[i] !== onlyLetters[onlyLetters.length - i - 1]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
