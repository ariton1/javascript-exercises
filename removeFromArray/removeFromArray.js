const removeFromArray = function(arr, ...args) {
    let newArray = [...arr];
    for(let i = 0; i < arr.length; i++){
        if(newArray.includes(args[i])){
            newArray.splice(newArray.indexOf(args[i]), 1)
        }
    }
    return newArray;
};

module.exports = removeFromArray;
