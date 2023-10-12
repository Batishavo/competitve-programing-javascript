/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  
    let sub = s.split('');
    let cad = t.split('');
    let pos = 0;

    for(let i=0;i<t.length;i++){
        if(pos>=s.length){
            break;
        }
        if(cad[i]==sub[pos]){
            pos++;
        }
    }



    return pos === s.length;

};