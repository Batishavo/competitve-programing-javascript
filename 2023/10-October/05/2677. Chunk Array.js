/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    
    let newArr = [];
    let n = arr.length;

    for(let i=0;i<n;i+=size){
        let tmpArr = [];
        for(let j=i;j<Math.min(n,i+size);j++){
            tmpArr.push(arr[j]);
        }
        newArr.push(tmpArr);
    }

    return newArr;
};
