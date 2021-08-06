const repeatString = function(str, times) {
    let newStr = '';
    if(times > -1){
        for(let i = 0; i < times; i++){
            newStr += str;
        } return newStr;
    } else {
        return "ERROR";
    }
    
};

module.exports = repeatString;
