/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let n = matrix.length;
    let m = matrix[0].length;
    let fin = n*m;
    let mov_i = [0,1, 0,-1];
    let mov_j = [1,0,-1, 0];
    let pos = 0;
    let i = 0;
    let j = 0;
    let answer = [];
    let memo = Array.from(Array(n), () => new Array(m).fill(0));
    //answer.push(matrix[0][0]);
    //memo[0][0]=1;
    //console.log(memo);

    while(fin!==0){
        //console.log(memo[i]);
        if(i>=n || i<0 || j>=m || j<0 || memo[i][j]===1 ){
            //console.log('x',i,j);
            i-=mov_i[pos];
            j-=mov_j[pos];
            pos=Math.trunc((pos+1)%4);
            i+=mov_i[pos];
            j+=mov_j[pos];
    
        }

        //console.log(i,j,pos,memo[i][j]);
        answer.push(matrix[i][j]);
        memo[i][j]=1;
        i+=mov_i[pos];
        j+=mov_j[pos];
        fin--;
    }   
    
    return answer;
};