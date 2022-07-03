/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aB = BigInt("0b"+a);
    let bB = BigInt("0b"+b);
    const res = aB+bB;
    return res.toString(2);
};