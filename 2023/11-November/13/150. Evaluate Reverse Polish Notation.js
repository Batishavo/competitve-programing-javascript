/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let n = tokens.length;
    let nums = [];

    for(let i=0;i<n;i++){
        switch (tokens[i]){
            case '+':
                nums[nums.length-2]+=nums[nums.length-1];
                nums.pop();
            break;
            case '-':
                //console.log(nums);
                nums[nums.length-2]-=nums[nums.length-1];
                nums.pop();
            break;
            case '/':
                nums[nums.length-2]= Math.trunc(nums[nums.length-2]/nums[nums.length-1]);
                nums.pop();
            break;
            case '*':
                nums[nums.length-2]*=nums[nums.length-1];
                nums.pop();
            break;
            default:
                nums.push(parseInt(tokens[i], 10));
            break;
        }
    }   
    return nums[0];
};