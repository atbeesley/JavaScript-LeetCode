function defangIPaddr(address: string): string {
    let final = "";
    for(let i of address){
        if(i === "."){
            final += "[.]"
        } else {
            final += i
        }
    }
    return final;
};