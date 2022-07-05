snail = function (array) {
  const arrayCopy = [...array];
  const snail = [];

  let stop = false;
  let i = 0;

  while (stop === false) {
    const leftRightNumbers = arrayCopy[i].splice(0, arrayCopy[i].length - 1);

    const topBottomNumbers = arrayCopy.map((arr) => arr.splice(-1, 1));

    const rightLeft = arrayCopy[arrayCopy.length - (1 + i)]
      .reverse()
      .splice(0, arrayCopy[arrayCopy.length - (1 + i)].length - 1);

    const bottomTopNumbers = arrayCopy.map((arr) => arr.splice(0, 1)).reverse();

    [
      leftRightNumbers,
      ...topBottomNumbers,
      rightLeft,
      ...bottomTopNumbers,
    ].forEach((num) => {
      if (num.length !== 0) snail.push(...num);
    });

    i++;
    stop = arrayCopy.every((arr) => arr.length === 0);
  }
  return snail;
};
