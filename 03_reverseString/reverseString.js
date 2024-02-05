const reverseString = function(name) {
const stringArr = name.split("");
let newName = "";
let arrLength = stringArr.length;
for (let i = 0; i < arrLength; i++) {
    newName += stringArr.pop();
}

return newName;
};

// Do not edit below this line
module.exports = reverseString;
