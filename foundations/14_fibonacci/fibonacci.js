const fibonacci = function(x) {
    if (x < 0) return "OOPS";
    if (x == 0) return 0;
    let prev = 0;
    let current = 1;
    for (let i = 1; i < + x; i++) {
        console.log(current);
        const tmp = current;
        current += prev;
        prev = tmp;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
