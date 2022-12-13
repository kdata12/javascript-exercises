const leapYears = function(year) {
    // if divisble by 100 and 400 then it is true

    //if divisible by 100 then it is false

    //if divisible by 4 then it is true

    if (year % 100 == 0 && year % 400 == 0) {
        return true;
    } else if (year % 100 == 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
