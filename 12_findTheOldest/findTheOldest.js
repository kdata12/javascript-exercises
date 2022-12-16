const findTheOldest = function(people) {
    let sorted = people.sort(function(a , b) {
        //if they are not dead yet, use current date
        if (!a.yearOfDeath) {
            const date = (new Date()).getFullYear();
            a['yearOfDeath'] = date;
        } else if (!b.yearOfDeath) {
            const date = (new Date()).getFullYear();
            b['yearOfDeath'] = date;
        }

        const aAge =  a.yearOfDeath - a.yearOfBirth
        const bAge = b.yearOfDeath - b.yearOfBirth

        return aAge > bAge ? -1 : 1 
    })

    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
