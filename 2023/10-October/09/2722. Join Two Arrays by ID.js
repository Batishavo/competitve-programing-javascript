/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {

    let answer = [];
    let pos1 = 0;
    let pos2 = 0;
    let tam1 = arr1.length;
    let tam2 = arr2.length;

    arr1.sort(function(a,b){return a.id-b.id});
    arr2.sort(function(a,b){return a.id-b.id});

    while(pos1<tam1 && pos2<tam2){
        if(arr1[pos1].id<arr2[pos2].id){
            answer.push(arr1[pos1++]);
        }
        else{
            if(arr1[pos1].id==arr2[pos2].id){    
                answer.push( Object.assign(arr1[pos1],arr2[pos2++]));
                pos1++;
            }
            else{
                answer.push(arr2[pos2++]);
            }

        }
    }

    while(pos1<tam1){
        answer.push(arr1[pos1++]);
    }
    while(pos2<tam2){
        answer.push(arr2[pos2++]);
    }
    return answer;
};