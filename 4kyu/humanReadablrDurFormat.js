function formatDuration(totalSeconds) {
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const days = Math.floor((totalSeconds % (3600 * 24 * 365)) / (3600 * 24));
  const years = Math.floor(totalSeconds / (3600 * 24 * 365));

  if (totalSeconds === 0) return "now";

  const date = [years, days, hours, minutes, seconds]
    .map((curDate, i) => {
      let formats = ["year", "day", "hour", "minute", "second"];
      const res = format(curDate, formats[i]);
      return res;
    })
    .filter((curDate) => !!curDate)
    .reduce((finalDate, curDate, i, arr) => {
      if (arr.length === 1) return (finalDate += curDate);
      if (curDate === arr[0]) return (finalDate += `${curDate}`);
      if (curDate === arr[arr.length - 1])
        return (finalDate += ` and ${curDate}`);
      finalDate += `, ${curDate}`;
      return finalDate;
    }, "");

  return date;
}

function format(value, valueStr) {
  return value !== 0
    ? value + (value === 1 ? ` ${valueStr}` : ` ${valueStr}s`)
    : "";
}
