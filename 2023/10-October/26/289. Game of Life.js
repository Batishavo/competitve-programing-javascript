/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    let n = board.length;
    let m = board[0].length;
    let movY = [0,1,-1, 0,1, 1,-1,-1];
    let movX = [1,0, 0,-1,1,-1, 1,-1];
    //console.log(n,m);
    for(let i=0;i<n;i++){
        for(let j = 0;j<m;j++){
            let cont = 0;
            let cosa =[];
            for(let k=0;k<movY.length;k++){
                let y = i+movY[k];
                let x = j+movX[k];

                if(y>=0 && y<n && x>=0 && x<m && board[y][x]>=1){
                    //cosa.push([y,x,board[x][y]]);
                    cont++;
                }

            }
            //console.log(i,j,cont,board[i][j],cosa);
            if(board[i][j]>=1){
                if(cont<2 || cont>3){
                    board[i][j]=2;
                }
            }
            else{
                if(cont===3){
                    board[i][j]=-1;
                }
            }
        }
    }
    //console.log(board);
    for(let i=0;i<n;i++){
        for(let j = 0;j<m;j++){
            if(board[i][j]==-1){
                board[i][j]  = 1;
            }            
            else if(board[i][j]==2){
                board[i][j] = 0;
            }
        }
    }
};