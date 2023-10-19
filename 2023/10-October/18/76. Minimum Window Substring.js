/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    if(s===t){
        return s;
    }

    let abecedaryS = Array(250).fill(0);
    let abecedaryT = Array(250).fill(0);


    let n = s.length;
    let m = t.length;

    //let cadN = s.split('');
    //let cadM = t.split('');

    //Sum values of s cad
    for(let i=0;i<m;i++){
        let character = t.charCodeAt(i);
        abecedaryT[parseInt(character)]++;
    }
    //Substract values of t cad
    for(let i=0;i<n;i++){
        let character = s.charCodeAt(i);
        abecedaryS[parseInt(character)]++;
    }

    //validate if exist positive integers
    for(let i=65;i<250;i++){
        //console.log(i,abecedary[i]);
        if(abecedaryS[i]<abecedaryT[i]){
            //console.log('X');
            return '';
        }
    }

    let l = 0;
    let r = n-1;

    while(true){
        let character = s.charCodeAt(l);
        if(abecedaryS[character]-1<abecedaryT[character]){
            break;
        }
        abecedaryS[character]--;
        l++;
    }
    while(true){
        let character = s.charCodeAt(r);
        if(abecedaryS[character]-1<abecedaryT[character]){
            break;
        }
        abecedaryS[character]--;
        r--;
    }

    let s1 = s.substring(l,r+1);

    l = 0;
    r = n-1;
    abecedaryS = Array(250).fill(0);
    for(let i=0;i<n;i++){
        let character = s.charCodeAt(i);
        abecedaryS[parseInt(character)]++;
    }

    while(true){
        let character = s.charCodeAt(r);
        if(abecedaryS[character]-1<abecedaryT[character]){
            break;
        }
        abecedaryS[character]--;
        r--;
    }
    while(true){
        let character = s.charCodeAt(l);
        if(abecedaryS[character]-1<abecedaryT[character]){
            break;
        }
        abecedaryS[character]--;
        l++;
    }
   let s2 = s.substring(l,r+1);

    console.log(s1,s2);


    return (Math.min(s1.length<s2.length))?s1:s2;
};