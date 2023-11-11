/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let bracket_queue = [];

    let n = s.length;

    s = s.split('');

    for(let i=0;i<n;i++){

        if(s[i]==='(' || s[i]==='[' || s[i]==='{'){
            bracket_queue.push(s[i]);
        }
        else{
            let m = bracket_queue.length;
            if(m<0){
                return false;
            }
            switch(s[i]){
                case ')':
                    if(bracket_queue[m-1]!=='('){
                        return false;
                    }
                break;
                case ']':
                    if(bracket_queue[m-1]!=='['){
                        return false;
                    }
                break;
                case '}':
                    if(bracket_queue[m-1]!=='{'){
                        return false;
                    }
                break;

            }
            bracket_queue.pop();
        }

    }

    return bracket_queue.length === 0;

};