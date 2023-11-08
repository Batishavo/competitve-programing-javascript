/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    let map = {};
    let n= nums.length;
    let maxLen = 0;

    for(let i=0;i<n;i++){
        map[nums[i]] = true;
        //console.log(nums[i]);
    }
    for(let i=0;i<n;i++){
        if((nums[i]-1 in map)){
            map[nums[i]]=false;
            //console.log(nums[i]);
        }
    }
    
    for(let i=0;i<n;i++){
        if(map[nums[i]]==true){
            let j = 0; 
            let count=0;
            while((nums[i]+j in map)){
                j++;
                count++;
            }
            if(count>maxLen){
                maxLen = count;
            }
            //console.log(nums[i]);
        }
    }

    return maxLen;
};