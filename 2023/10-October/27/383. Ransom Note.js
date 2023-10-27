/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    let mapMagazine = {};
    let answer = true;

    magazine.split('').forEach(letra =>{
        if(!(letra in mapMagazine)){
            console.log(letra);
            mapMagazine[letra]=0;
        }
        mapMagazine[letra]++;
    })

    ransomNote.split('').forEach(letra=>{
        console.log(letra);
        if(!(letra in mapMagazine)){
            //console.log('xx');
            answer = false;
            return ;
        }
        console.log('++',mapMagazine[letra]);
        mapMagazine[letra]--;
        if(mapMagazine[letra]<0){
            answer = false;
            return;
        }
    });
    return answer;
};