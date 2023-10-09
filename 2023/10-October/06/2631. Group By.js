/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let answer = {};
    let n =this.length;

    for(let i=0;i<n;i++){
        let value=fn(this[i]);
        if(value in answer){
            answer[value].push(this[i]);
        }
        else{
            answer[value]=[this[i]];
        }
        
    }
    return answer;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */