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
    let numbers = readLine().split(' ');
    let n1 = parseInt(numbers[0]);
    let n2 = parseInt(numbers[1]);
    let n3 = parseInt(numbers[2]);
    // console.log(n1,n2,n3);
    console.log(Math.abs(Math.trunc(((n1+1)*(n2+1)/(n3+1))-1)));
}