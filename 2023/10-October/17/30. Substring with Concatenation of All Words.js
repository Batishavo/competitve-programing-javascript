/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    
    let list = [];
    let n = s.length;
    let worldMap = {};

    //console.log(n);

    words.forEach(val=>{
        if(!(val in worldMap)){
            worldMap[val]=0;
        }
        worldMap[val]++;
    });

    //console.log(worldMap);

    let wordSize = words[0].length;
    let windowSize = words.length * wordSize;

    //console.log(wordSize,windowSize);

    for(let i = 0; i<=n-windowSize;i++){
        
        let map = {...worldMap};
        let left = i;
        let match = 0;


        for(let right = i; right<=i+windowSize-wordSize; right += wordSize){
            let rightWord = s.substring(right,right+wordSize);

            //console.log(rightWord,right);

            if(rightWord in map){
                map[rightWord]--;
                if(map[rightWord]===0){
                    match++;
                }
            }
            else{
                break;
            }

            //console.log(match,map.length,map);

           
        }
         if(match === Object.keys(map).length){
                list.push(left);
                //break;
            }

    }


    return list;
};