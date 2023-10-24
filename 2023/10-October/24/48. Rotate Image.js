/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) { 
    var switchValues = ((i,j,y,x)=>{
        let tmp = matrix[i][j];
        matrix[i][j]=matrix[y][x];
        matrix[y][x]=tmp;
    });

    var rotateMat = (n,ini,fin)=>{
        if(n<=0){
            return;
        }
        let left = ini;
        let right = fin; 

        for(let i=ini;i<fin;i++){
            switchValues(ini,left,left,fin);
            switchValues(ini,left,fin,right);
            switchValues(ini,left,right,ini);
            left++;
            right--;
        }
        rotateMat(n-2,ini+1,fin-1);
    }
    rotateMat(matrix.length,0,matrix.length-1);
};