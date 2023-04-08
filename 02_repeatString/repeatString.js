const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let myStr = "";
        for (let i = 0; i < num; i++) {
            myStr += str;
        }
        return myStr;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
