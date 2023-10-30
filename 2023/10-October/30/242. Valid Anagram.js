/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let abecedari= {};
    s=s.split('');
    t=t.split('');
    let flag = true;

    for(let i=0;i<s.length;i++){
        if(!(s[i] in abecedari)){
            abecedari[s[i]]=0;
        }
        abecedari[s[i]]++;
        //console.log(abecedari[s[i]]);
    }
    for(let i=0;i<t.length;i++){
         if(!(t[i] in abecedari)){
            return false;
        }
        abecedari[t[i]]--;
    }

    Object.keys(abecedari).forEach((key)=>{
        //console.log(key,val,val!=0);
        if(abecedari[key]!=0){
            flag = false ;
            return;
        }
    });
    return flag;
};