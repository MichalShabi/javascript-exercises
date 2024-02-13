const findTheOldest = function(people) {
    let oldestName = "";
    let yearsAlive = 0;
    let years;
    people.forEach(person => {
        if(person.yearOfDeath === undefined) {
            years = (new Date()).getFullYear() - Number(person.yearOfBirth);
        } else {years = Number(person.yearOfDeath) - Number(person.yearOfBirth);}

        if (years > yearsAlive) {
            oldestName = person.name;
            yearsAlive = years;
        }
        
    });
    let find = people.find(item => item.name === oldestName);

    return find;
}



// Do not edit below this line
module.exports = findTheOldest;
