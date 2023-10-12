/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let matriz ;
let getMatriz =((cad,n,dir,i,j,pos,cadPos)=>{
    //console.log('----------');
    //console.log(cad,n,dir,i,j,pos,cadPos);
    //console.log(matriz);
    //console.log(i,j);
    if(pos<=0){
        return ;
    }

    if(i<0){
        getMatriz(cad,n,[1,0],i+2,j-1,pos,cadPos);
    }
    else if(i>=n){
        getMatriz(cad,n,[-1,+1],i-2,j+1,pos,cadPos);
    }
    else{
        matriz[i][j]=cad[cadPos];
        //console.log(cad[cadPos]);
        getMatriz(cad,n,dir,i+dir[0],j+dir[1],pos-1,cadPos+1);
    }
    
    return;

});

let getAnswer = ((y,x)=>{
    let answer = [];
    for(let i=0;i<y;i++){
        for(let j=0;j<x;j++){
            if(matriz[i][j]!=0){
                answer.push(matriz[i][j]);
            }
        }
    }
    return answer;
});

var convert = function(s, numRows) {
    if(numRows===1){
        return s;
    }
    matriz = Array.from({ length: numRows }, () => Array(s.length).fill(0));
    //console.log(matriz);
    getMatriz(s.split(''),numRows,[1,0],0,0,s.length,0);
    //console.log(s.length);
    //console.log(matriz);

    //let answer = getAnswer(numRows,s.length);
    //console.log(answer);
    return answer.join('');

};