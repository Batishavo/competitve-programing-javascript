/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let memo = {};
    let used = {};

    for(let i=0;i<nums.length;i++){
      
      if(!(nums[i] in memo)){
        memo[nums[i]]=[];
      }
      memo[nums[i]].push(i);
        
    }

    for(let i=0;i<nums.length;i++){
        if(!(nums[i] in used) && memo[nums[i]].length>1){
            used[nums[i]] = true;
            for(let j=0;j<memo[nums[i]].length-1;j++){
                if(Math.abs(memo[nums[i]][j]-memo[nums[i]][j+1])<=k){
                    return true;
                }
            }
        }
    }


    return false;

};