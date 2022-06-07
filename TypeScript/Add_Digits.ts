function addDigits(num: any): number {
    num = String(num);
    while(num.length != 1){
        let temp = num.split('');
        let sum = 0;
        for(let i=0; i<temp.length; i++){
            sum += Number(temp[i]);
            }
        num = String(sum);
    }
    return num;
};