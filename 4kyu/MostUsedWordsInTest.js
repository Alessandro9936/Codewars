function topThreeWords(text) {
  const cleanString = text.replace(/[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
  const c = cleanString
    .toLowerCase()
    .split(" ")
    .filter((curWord) => curWord !== "" && curWord !== "'")
    .reduce((acc, curWord) => {
      if (!acc.some((keyWord) => keyWord.word === curWord)) {
        acc.push({ word: curWord, counter: 1 });
      } else {
        acc.find((keyWord) => keyWord.word === curWord).counter++;
      }
      return acc.sort((a, b) => b.counter - a.counter);
    }, []);

  return c.slice(0, 3).map((a) => a.word);
}
