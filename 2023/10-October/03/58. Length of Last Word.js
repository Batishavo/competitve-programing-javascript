/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let cad = s.trim().split(' ');

    let n = cad.length;

    
    return cad[n-1].length;
};