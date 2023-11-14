const sumAll = function(min, max) {
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    if (min < 0 || max < 0) {
            return "ERROR";
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";        
    }
    let sum = 0;

    for (let index = min; index <= max; index++) {
        sum += index;        
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
