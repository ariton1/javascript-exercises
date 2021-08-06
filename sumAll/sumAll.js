const sumAll = function(start, end) {
    let i = start, sum = 0;

    if(typeof start === 'number' && typeof end === 'number' && start > 0 && start > 0){
        if(start > end){
            i = end;
            do {
                sum = sum + i;
                i++;
            } while (i <= start);
            return sum;
        } else {
            do {
                sum = sum + i;
                i++;
            } while (i <= end);
        
            return sum;
        }
    } else if (start < 0 || end < 0) {
        return "ERROR"
    } else {
        return "ERROR"
    }
        
    };
    

module.exports = sumAll;
