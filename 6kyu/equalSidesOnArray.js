function findEvenIndex(arr) {
  function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }

  return arr.findIndex((_, i) => {
    return sum(arr.slice(0, i)) === sum(arr.slice(i + 1, arr.length));
  });
}
