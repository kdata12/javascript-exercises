const fibonacci = function(n) {
    if (parseInt(n) < 0) {
        return "OOPS"
    }

    if (parseInt(n) === 1) {
        return 1
    } else if ( parseInt(n) === 0) {
        return 0
    }
    return fibonacci(n-1) + fibonacci(n-2)
};

// Do not edit below this line
module.exports = fibonacci;
