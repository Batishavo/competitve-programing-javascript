process.stdin.resume();
process.stdin.setEncoding('utf-8');

let standardInputString = '';
let currentLine = 0;

function readLine(){
    return standardInputString[currentLine++]
}

process.stdin.on('data',rawData=>{
    standardInputString += rawData
})

process.stdin.on('end',_=>{
    standardInputString = standardInputString.trim().split('\n').map(line=>{
        return line.trim()
    })
    main()
})

function main(){

    let answer = new AreaPoligons();

    const numPoligons = readLine();


    let poligns = [];

    for(let i=0;i<numPoligons;i++){
        
        let pointsPoligon = readLine();
        let pointsX = [];
        let pointsY = [];

        for(let j=0;j<pointsPoligon;j++){
            let ponits = readLine().split(' ');
            let ponitX = parseInt(ponits[0]);
            let pointY = parseInt(ponits[1]) ;
            pointsX.push(ponitX);
            pointsY.push(pointY);
        }
        poligns.push([pointsX,pointsY]);
    }

    //console.log(poligns);

    console.log(Math.trunc(answer.totalArea(numPoligons,poligns)));
}

class AreaPoligons{
    
    totalArea = (numPoligons,poligons)=>{
        let total = 0;
        for(let i = 0;i<numPoligons;i++){
            total+=this.calcuPolygonArea(poligons[i][0].length,poligons[i]);
        }
        return total;
    }

    calcuPolygonArea(n,poligon){
        //console.log(n,poligon);
        let total = 0;
        for(let i=0;i<n;i++){
            //console.log(poligon[0][i],poligon[1][i]);
            let num = i==n-1?0:i+1;
            let addX = poligon[0][i];
            let addY = poligon[1][num];
            let subX = poligon[0][num];
            let subY = poligon[1][i];

            total += (addX * addY * 0.5);
            total -= (subX * subY * 0.5);
            //console.log(addX,addY,subX,subY,total);
        }
        return Math.abs(total);
    }


}