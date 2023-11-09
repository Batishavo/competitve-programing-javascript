/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

    let n = intervals.length;
    let answer = [];

    if (n === 0 ){
        return [newInterval];
    }
    if(n===1){
        if(newInterval[0]<=intervals[0][1]&&newInterval[1]>=intervals[0][0]){
            intervals[0][1]=Math.max(intervals[0][1],newInterval[1]);
            intervals[0][0]=Math.min(intervals[0][0],newInterval[0]);
        }
        else{
          intervals.push(newInterval);  
        }
        return intervals.sort((a,b)=>{return a[0]-b[0]});
    }
    if(newInterval[1]<intervals[0][0]){
        answer.push(newInterval);
        for(let i=0;i<n;i++){
            answer.push(intervals[i]);
        }
        return answer;
    }
    else if(intervals[n-1][1]<newInterval[0]){
        intervals.push(newInterval);
        return intervals;
    }

    let flag = 0;
    //console.log(n,intervals[0][0],newInterval[0]);
 
    for(let i = 0;i<n;i++){
        //console.log(i);
        if(flag === 0 && 
            ((newInterval[1]>=intervals[i][0] && newInterval[1]<=intervals[i][1]) ||
            (newInterval[0]>=intervals[i][0] && newInterval[0]<=intervals[i][1])) ||
            (newInterval[0]<=intervals[i][0] && newInterval[1]>=intervals[i][1])
        ){

            intervals[i][0] = Math.min(intervals[i][0],newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1],newInterval[1]);

            for(let j=i+1;j<n;j++){
                
                if(intervals[j][0]>newInterval[1]){
                    answer.push([intervals[i][0],newInterval[1]]);
                    i=j-1;
                    flag = 1;
                    break;
                }
                newInterval[1] = Math.max(newInterval[1],intervals[j][1])

            }
            if(flag === 0){
                //console.log('x');
                answer.push([intervals[i][0],newInterval[1]]);
                break;
            }
            

        }
        else if(i!=n-1 && intervals[i][1]<newInterval[0] && newInterval[1]<intervals[i+1][0]){
            answer.push(intervals[i]);
            answer.push(newInterval);
            flag = 1;
        }
        else{
            answer.push(intervals[i]);
        }
        
    }
    //console.log('x3');
    //console.log(answer);
    return answer;
};