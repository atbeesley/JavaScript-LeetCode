function isValid(s: string): boolean {
    let stack = [];
    for(let i=0; i < s.length; i++){
        
    let curChar = s[i];

    switch(curChar) {
        case '(': stack.push(')');
                break;
        case '[': stack.push(']');
                break;
        case '{': stack.push('}')
                break;
        default:
        const topElement = stack.pop()
        if (curChar !== topElement) return false; 
     }
    }
        return stack.length === 0;
};