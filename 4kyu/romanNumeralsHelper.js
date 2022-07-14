// TODO: create a RomanNumerals helper object

const matchers = [
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

const RomanNumerals = {
  toRoman: function (integer) {
    let romanString = "";

    matchers.forEach((romanNum) => {
      while (integer >= romanNum[1]) {
        romanString += romanNum[0];
        integer -= romanNum[1];
      }
    });
    return romanString;
  },

  fromRoman: function (romanString) {
    return romanString
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce(
        (acc, cur) => (acc += matchers.find((el) => el[0] === cur)[1]),
        0
      );
  },
};
