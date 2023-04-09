const removeFromArray = function(myArr, ...myArgs) {
    for (let i = 0; i < myArgs.length; i++) {
        for (let j = 0; j < myArr.length; j++) {
            if (myArr[j] === myArgs[i]) {
                myArr.splice(j, 1);
                i--;
                
            }
        }
    }
    return myArr;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
