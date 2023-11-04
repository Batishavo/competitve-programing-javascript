/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagram = [];
    let map = {};
    let n = strs.length;
    //console.log(n);
    for(let i=0;i<n;i++){
        let tmp = strs[i].split('').sort().join("");
        if(!(tmp in map)){
            map[tmp]=[];
            anagram.push(tmp);
        }
        map[tmp].push(strs[i]);
        //console.log(tmp,map[tmp]);
    }
    let answer = [];
    anagram.forEach(val=>{
        //console.log(val);
        answer.push(map[val]);
    });
    return answer;
};