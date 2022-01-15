var isPalindrome = function(x) {
    string = x.toString();
    reversedString = string.split("").reverse().join("");
    return string === reversedString;
};