const palindromes = function (string) {
    //replace punctuation, remove spaces, lower case all
    let nString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~/\s/g()]/g,"").toLowerCase();
    //compare with reverse of string
    let rString = "";
    for(let i = nString.length-1; i >= 0; i--) {
        rString += nString[i];
    }
    //return true or false
    return nString === rString
};

// Do not edit below this line
module.exports = palindromes;
