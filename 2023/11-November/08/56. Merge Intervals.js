/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    if(intervals === []){
        return [];
    }

    intervals.sort((a,b)=>{
        //console.log(a,b);
        if(a[0]==b[0]){
            return a[1]-b[1];
        }
        return a[0]-b[0];
    });


    let n = intervals.length;
    let l = intervals[0][0];
    let r = intervals[0][1];
    let answer = [];

    //console.log(intervals);

    let pushAnswer = ((l,r)=>{
        answer.push([l,r]);
    });

    for(let i = 1;i<n;i++){
        if(intervals[i][0]<=r){
            r=Math.max(r,intervals[i][1]);
        }
        else{
            pushAnswer(l,r);
            l = intervals[i][0];
            r = intervals[i][1];
        }

    }

    pushAnswer(l,r);

    return answer;
};