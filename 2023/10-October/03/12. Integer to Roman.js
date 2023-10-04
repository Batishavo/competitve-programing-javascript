/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romanNumber = [];

  let charactersValues = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let n = charactersValues.length;
  //console.log(n);
  while (num > 0) {
    for (let i = 0; i < n; i++) {
      //console.log(charactersValues[i][1],charactersValues[i][0]);
      if (num >= charactersValues[i][1]) {
        //console.log('entra');
        num -= charactersValues[i][1];
        romanNumber.push(charactersValues[i][0]);
        break;
      }
    }
  }

  return romanNumber.join("");
};
