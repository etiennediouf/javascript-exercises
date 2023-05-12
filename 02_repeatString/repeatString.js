const repeatString = function(str, number) {
    if(str === ''){
        return '';
    }else if(number >= 0){
        return str.repeat(number)
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
