function isPowerOfTwo(n: number): boolean {
    if(n == 1 || n == 2){
       return true
    }
    if(n % 2 !== 0 || n == 0){
       return false
    }
    return isPowerOfTwo(n/2)
};