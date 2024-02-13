const fibonacci = function(num) {
    let n1 = 0, n2 = 1, nextTerm = 0;

    if(1 === Number(num)) {
        return 1;
    }
    else if(num >= 0) {
        for (let i = 1; i < num; i++) {
            // console.log(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        return nextTerm;
    }
    return "OOPS"
    
};

// Do not edit below this line
module.exports = fibonacci;
