/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let n = s.length;
    
    let mapS = {};
    let mapT = {};

    let cadS = s.split('');
    let cadT = t.split('');
    
    let cont = 0;

    for(let i = 0;i<n;i++){

        if(!(cadS[i] in mapS) && !(cadT[i] in mapT)){
            mapS[cadS[i]] = cont;
            mapT[cadT[i]] = cont;
            cont++;
        }
        else if(mapS[cadS[i]]!==mapT[cadT[i]]){
            return false;
        }
    }
    
    return true;
};