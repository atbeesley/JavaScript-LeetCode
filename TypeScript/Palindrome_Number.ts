function isPalindrome(x: number): boolean {
    let string = x.toString();
    const reversedString = string.split("").reverse().join("");
    return string === reversedString;
};