/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


let isSubString = ((cad1,cad2,pos)=>{
    //console.log(cad1,ca);
    for(let i=0;i<cad2.length;i++){
        //console.log(cad1[pos],cad2[i]);
        if(cad1[pos++]!=cad2[i]){
            return false;
        }
    }
    return true;
});

var strStr = function(haystack, needle) {

    let cad1=haystack.split('');
    let cad2=needle.split('');
    let answer = -1;

    for(let i=0;i<cad1.length;i++){
        if(cad1[i]==cad2[0]){
            if(i+cad2.length>cad1.lenght){
                break;
            }
            if(isSubString(cad1,cad2,i)){
                return i;
            }
        }
    }
    
    return answer;
};