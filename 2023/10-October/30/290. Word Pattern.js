/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s=s.split(' ');
    let n = s.length;
    let cad  = pattern.split('');

    let mapPattern = {};
    let mapCad = {};

    if(n!=cad.length){
        //console.log("X");
        return false;
    }

    for(let i=0;i<n;i++){
        s[i]=s[i]+'1';
    }

    for(let i = 0;i<n;i++){
        
        if(!(cad[i] in mapPattern)){
            mapPattern[cad[i]]=s[i];
        }
        if(!(s[i] in mapCad)){
          mapCad[s[i]]=cad[i];   
        }

        //console.log(mapPattern[cad[i]],s[i],mapCad[s[i]],cad[i],'++');

        if((mapPattern[cad[i]]!==s[i]) || (mapCad[s[i]]!==cad[i])){

            console.log(i);
            return false;
        }

    }

    return true;

};