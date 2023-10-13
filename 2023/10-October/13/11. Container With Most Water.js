/**
 * @param {number[]} height
 * @return {number}
 */
let getArea = ((p1,p2,height)=>{

    

    return Math.min(height[p1],height[p2])*(p2-p1);
});

var maxArea = function(height) {
    let p1=0;
    let p2=height.length-1;
    let answer = getArea(p1,p2,height);


    console.log(p1,p2,answer);

    while(p1<=p2){
        let actualArea = getArea(p1,p2,height);
        answer = Math.max(answer,actualArea);

        if(height[p1]<height[p2]){
            p1++;
        }
        else{
            p2--;
        }
    }

    return answer;
};