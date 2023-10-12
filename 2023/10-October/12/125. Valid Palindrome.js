/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    

    let cad = s.toLowerCase().replaceAll(/[^a-z0-9]/gi,'').split('');

    let posL=0;
    let posR=cad.length-1;

    console.log(cad);

    while(posL<posR){
        if(cad[posL++]!=cad[posR--]){
            console.log(posL-1,cad[posL-1],posR+1,cad[posR+1]);
            return false;
        }
    }
    return true;
}