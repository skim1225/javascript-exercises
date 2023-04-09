const palindromes = function(str) {
    let newStr = str.replace(/\W/g, "").toLowerCase();
    let isPal = true;
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) {
            isPal = false;
        }

    }
    return isPal;
};

// Do not edit below this line
module.exports = palindromes;
