process.stdin.resume();
process.stdin.setEncoding('utf-8');

var standardInputString = '';
var currentLine = 0;

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
    const name = readLine();
    const values = name.split(' ');
    x = parseInt(values[0]); /* asigna el valor correspondiente */;
    y = parseInt(values[1]);/* asigna el valor correspondiente */;

    arr[0] = equ1();
    arr[1] = equ2();
    arr[2] = equ3();
    arr[3] = equ4();
    arr[4] = equ5();
    arr[5] = equ6();

    //console.log(arr);
    //console.log(INT_MAX);

    var answer = arr[0];

    for (var i = 1; i < 6; i++) {
        answer = Math.min(answer, arr[i]);
    }
    if (answer >= INT_MAX) {
        console.log(-1);
        return;
    }

    console.log(answer);
}
const INT_MAX = Number.MAX_SAFE_INTEGER;

var x, y;
var arr = new Array(10);

function equ1() {
    var num_a = parseFloat(x) / 2;
    var num_b = parseFloat(y) - (num_a * 2);

    if (num_a > 0 && num_b > 0) {
        return num_a * 2 + num_b * 2;
    }

    return INT_MAX;
}

function equ2() {
    //console.log(INT_MAX );
    var num_a = parseFloat(x) / 2;
    var num_b = parseFloat(y) - num_a;
    num_b /= 2;

    if (num_a > 0 && num_b > 0) {
        return num_a * 2 + num_b * 2;
    }

    return INT_MAX;
}

function equ3() {
    var num_b = parseFloat(x) / 2;
    var num_a = parseFloat(y) - num_b;
    num_a /= 2;

    if (num_a > 0 && num_b > 0) {
        return num_a * 2 + num_b * 2;
    }

    return INT_MAX;
}

function equ4() {
    var num_b = parseFloat(x) / 2;
    var num_a = parseFloat(y) - num_b;

    if (num_a > 0 && num_b > 0) {
        return num_a * 2 + num_b * 2;
    }

    return INT_MAX;
}

function equ5() {
    var num_a = parseInt(y) - parseInt(x);
    var num_b = parseInt(x) - num_a;

    //console.log(num_a,num)

    if (num_a > 0 && num_b > 0) {
        return num_a * 2 + num_b * 2;
    }

    return INT_MAX;
}

function equ6() {
    var num_b = parseFloat(y) - parseFloat(x);
    var num_a = parseFloat(x) - num_b;

    if (num_a > 0 && num_b > 0) {
        return num_a * 2 + num_b * 2;
    }

    return INT_MAX;
}



// Llama a la función principal para ejecutar el código
//main();
