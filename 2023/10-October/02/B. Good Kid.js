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
  const test = readLine();

  let slavaicProduct = new MaximumProduct();

  for (let t = 0; t < test; t++) {
    let n = readLine();
    let arr = readLine().split(" ");

    console.log(slavaicProduct.calculateMaximum(arr, n));
  }
}

class MaximumProduct {
  calculateMaximum = (arr, n) => {
    arr.sort();
    arr[0]++;
    let total = arr[0];

    for (let i = 1; i < n; i++) {
      total *= arr[i];
    }

    return total;
  };
}
