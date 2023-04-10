const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    let fibs = [];
    n = parseInt(n);
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            fibs[i] = 1;
        } else {
            fibs[i] = fibs[i-1] + fibs[i-2];
        }
        console.log(fibs);
    }
    return fibs[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
