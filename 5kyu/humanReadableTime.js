/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  let ss = 0;
  let mm = 0;
  let hh = 0;

  for (let i = 0; i < seconds; i++) {
    ss++;
    if (ss === 60) {
      ss = 0;
      mm++;
    }

    if (mm === 60) {
      mm = 0;
      hh++;
    }
  }

  return `${hh < 10 ? "0" + hh : hh}:${mm < 10 ? "0" + mm : mm}:${
    ss < 10 ? "0" + ss : ss
  }`;
}
