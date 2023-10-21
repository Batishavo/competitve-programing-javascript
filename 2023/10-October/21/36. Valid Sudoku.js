/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {

    const validRow = ((i,j,num)=>{
        for(let x = 0;x<9;x++){
            if(x==i){
                continue;
            }
            if(board[x][j]==num){
                return false;
            }
        }
        return true;
    });
    const validColumn = ((i,j,num)=>{
        for(let x = 0;x<9;x++){
            if(x==j){
                continue;
            }
            if(board[i][x]==num){
                return false;
            }
        }
        return true;
    });
    const validSubBox = ((i,j,num)=>{

        let beginX = Math.trunc(i/3)*3;
        let beginY = Math.trunc(j/3)*3;
        for(let x = beginX; x<beginX+3;x++){
            for(let y = beginY;y<beginY+3;y++){
                if(x==i && j==y){
                    continue;
                }
                if(board[x][y]==num){
                    console.log(beginX,beginY);
                    console.log('--',x,y,i,j);
                    return false;
                }
            }
        }
        return true;
    });

    for(let i = 0;i< 9; i++){
        for(let j=0;j<9;j++){

            if( board[i][j] !== '.' &&
                (!validRow(i,j,board[i][j])
                ||!validColumn(i,j,board[i][j])
                ||!validSubBox(i,j,board[i][j])))
            {
                console.log(i,j,board[i][j]);
                console.log(!validRow(i,j,board[i][j])
                ,!validColumn(i,j,board[i][j])
                ,!validSubBox(i,j,board[i][j]));
                return false
            }

        }
    }
    return true;
};