var countSeniors = function(details) {
    let count = 0;
    for(d in details){
        const age = details[d].slice(11, 13)
        if(age > 60){
            count += 1;
        }
    }
    return count;
};

