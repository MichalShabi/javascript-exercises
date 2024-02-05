const repeatString = function(name, num) {
let newString = "";
if(num < 0) {
    return "ERROR";
}
    for (let i = 0; i < num; i++) {
        newString += name;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
