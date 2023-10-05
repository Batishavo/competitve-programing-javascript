/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(strs.length === 1){
        return strs[0];
    }

    strs.sort();
    
    let n = strs.length;

    let cad1=strs[0].split('');;
    let cad2=strs[n-1].split('');
    let long = -1;


    for(let i = 0;i<Math.min(cad1.length,cad2.length);i++){
        if(cad1[i]!=cad2[i]){
            break;
        }
        long = i;
    }
    if(long!=-1){
        return strs[n-1].slice(0,long+1);
    }
    else{
        return '';
    }
};