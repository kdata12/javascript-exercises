const removeFromArray = function(array, ...args) {
    let toBeRemoved = new Set();

    for (const item of args) {
        toBeRemoved.add(item)
    }

    let newArray = array.filter(function (item){
        if (!toBeRemoved.has(item)) {
            return item
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
