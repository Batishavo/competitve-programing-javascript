process.stdin.resume();
process.stdin.setEncoding("utf-8");

let standardInputString = "";
let currentLine = 0;

function readLine() {
  return standardInputString[currentLine++];
}

process.stdin.on("data", rawData => {
  standardInputString += rawData;
});

process.stdin.on("end", _ => {
  standardInputString = standardInputString
    .trim()
    .split("\n")
    .map(line => {
      return line.trim();
    });
  main();
});

function main() {
  const n = readLine();
  let animals = [];
  for (let i = 0; i < n; i++) {
    let animal = readLine();
    animals.push(animal);
  }

  answer = new KindsAnimals();
  console.log(answer.mostComun(n, animals));
}

class KindsAnimals {
  mostComun = (n, animals) => {
    let memo = {};
    let mayor = 0;
    let answer = "";

    animals.forEach(animal => {
      if (animal in memo) {
        memo[animal]++;
      } else {
        memo[animal] = 1;
      }
      ////////////////////////
      if (memo[animal] > mayor) {
        mayor = memo[animal];
        answer = animal;
      } else if (memo[animal] == mayor) {
        answer = "NONE";
      }
      //console.log(animal, mayor, answer);
    });

    if(answer != 'NONE'){
        if(n-mayor>=mayor){
            answer = 'NONE';
        }
    }

    return answer;
  };
}
