function sortArray(array) {
  const odds = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  return array.map((digit) => (digit % 2 !== 0 ? odds.shift() : digit));
}
