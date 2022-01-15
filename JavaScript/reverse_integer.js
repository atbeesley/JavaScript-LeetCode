var reverse = function(x) {
    var reversedNum = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (reversedNum > 2**31) return 0;
    return reversedNum * Math.sign(x);
};
