/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {

    let pos1 = 0;
    let pos2 = numbers.length-1;
 
    while(numbers[pos1]+numbers[pos2]!==target){
        let sum = numbers[pos1]+numbers[pos2];
        if(sum>target){
            pos2--;
        }
        else{
            pos1++;
        }
 
 
    } 
 
    return[pos1+1,pos2+1];
 
 };