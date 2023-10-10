/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let tmp =  s.trim().split(' ').reverse();
    let answer = [tmp[0]];

    console.log(tmp);

    for(let i=1;i<tmp.length;i++){
        if(tmp[i]===''){
            
            continue;
     
        }
        else{
            answer.push(tmp[i]);
        }
    }

    return answer.join().replaceAll(',',' ');
};