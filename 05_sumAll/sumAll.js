const sumAll = function(first, last) {
    if (first < 0 || last < 0) {
        return "ERROR";
    }
    if (typeof(first) !== "number" || typeof(last) !== "number") {
        return "ERROR";
    }
    let small;
    let big;
    if (first < last) {
        small = first;
        big = last;
    } else {
        small = last;
        big = first;
    }
    let total = 0;
    for (let i = small; i <= big; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
