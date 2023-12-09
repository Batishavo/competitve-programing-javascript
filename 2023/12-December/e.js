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
    const n = parseInt(readLine());
    const arr= parseInt(readLine().split(' '));

    let sum = arr.forEach(element => {
        return element;
    });

}a