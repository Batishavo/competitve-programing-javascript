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

  let ants = {};
  let answer = new SmallerTag();

  for (let i = 0; i < n; i++) {
    let ant = readLine();
    if (ant.length <= 8) {
      ants[ant]=1;
    }
  }

  console.log(answer.newTag(ants));
}

class SmallerTag {
  newTag = (ants) => {
    //ants.sort();

    for (let i = 0; i < 10e6; i++) {
      //console.log(ants[i], typeof ants[i])
      if (ants[i] == 1) {
        continue;
      }
      else{
        return i;
      }
    }
  };
}
