process.stdin.resume();
process.stdin.setEncoding('utf-8');

let standardInputString = '';
let currentLine = 0;

const abc = ['a', 'b', 'c'];
class Is_abc {

  swap = (cad, i, j) => {
    let temp = cad[i];
    cad[i] = cad[j];
    cad[j] = temp;
    //console.log('cad:',cad);
    return cad;
  };

  compare = cad => {
    for (let i = 0; i < 3; i++) {
      if (cad[i] != abc[i]) {
        // console.log(cad,' ',abc,' ',i,cad[i],' ',abc[i]);
        return false;
      }
    }
    return true;
  };

  abc = cad => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cad = this.swap(cad, i, j);
        //console.log(cad);
        if (this.compare(cad)) {
          return 'YES';
        }
        cad = this.swap(cad, i, j);
        //console.log('B ',cad);
      }
    }
    return 'NO';
  };
}

function readLine() {
  return standardInputString[currentLine++];
}

process.stdin.on('data', rawData => {
  standardInputString += rawData;
});

process.stdin.on('end', _ => {
  standardInputString = standardInputString
    .trim()
    .split('\n')
    .map(line => {
      return line.trim();
    });
  main();
});

function main() {

  let shor_sort = new Is_abc();

  const t = readLine();
  //console.log(t);
  for (let i = 0; i < t; i++) {
    let cad = readLine();
    console.log(shor_sort.abc(cad.split('')));
  }
}
