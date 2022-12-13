const sumAll = function(x, y) {
    if (typeof(x) != "number" || typeof(y) != "number" || x < 0 || y < 0) {
        return 'ERROR'
    };

    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    };

    let total = 0;
    for(let i = x; i <= y; i++) {
        total += i;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
