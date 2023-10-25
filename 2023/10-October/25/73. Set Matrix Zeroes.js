/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let memo = Array.from(Array(n), () => new Array(m).fill(0));

    //console.log(n,m,memo);

    let fileRow0 = ((y,x)=>{

        for(let i = 0;i<n;i++){
            if(matrix[i][x]!==0){
                memo[i][x]=1;
            }
            matrix[i][x]=0;
        }
        for(let j = 0;j<m;j++){
            if(matrix[y][j]!==0){
                memo[y][j]=1;
            }
            matrix[y][j]=0;
        }
    });


    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j]===0 && memo[i][j]===0){
                //console.log('entra',i,j);
                fileRow0(i,j);
            }
            //console.log('no',i,j);
        }
    }
};