/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched. */

function pigIt(str) {
  const splitStr = str.split(" ");

  const formattedStr = splitStr.map((str, idx) => {
    const splittedStr = str.split("");
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    if (!regex.test(splittedStr[0])) {
      splittedStr.push(splittedStr.shift());
      return splittedStr.join("") + "ay";
    }

    return splittedStr;
  });
  return formattedStr.join(" ");
}
