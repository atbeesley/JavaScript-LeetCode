const countSeniors = (details: string[]): number => {
    let count = 0;
    for(const d in details){
        const age = Number(details[d].slice(11, 13));
        if(age > 60){
            count += 1;
        }
    }
    return count;
};
