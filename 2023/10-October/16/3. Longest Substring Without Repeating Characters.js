/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if(s===''){
        return 0;
    }

    let abecedary = Array(350).fill(-1);
    let n = s.length;
    let answer = 1;
    let actual = 1;
    let p1 = 0;
    abecedary[s.charCodeAt(0)] = 0;

    for(let i = 1; i<n;i++){

        let characterAtual = s.charCodeAt(i);

        if(abecedary[characterAtual]===-1){
            actual++;
        }
        else{
            //actual-=abecedary[characterAtual];
            for(let j=p1;j<abecedary[characterAtual];j++){
                abecedary[s.charCodeAt(j)]=-1;
            }
            p1=abecedary[characterAtual]+1;
            actual = i-p1+1;
            //console.log(i,s.charAt(i),p1,actual);
        }
        abecedary[characterAtual] = i;

        answer = Math.max(answer,actual);

    }

    return answer;
};