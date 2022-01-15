/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n===1 || n !== 0 && n % 3 === 0 && isPowerOfThree(n/3);
};

console.log(isPowerOfThree(45)
)
console.log(isPowerOfThree(9)
)
console.log(isPowerOfThree(27)
)
console.log(isPowerOfThree(36)
)