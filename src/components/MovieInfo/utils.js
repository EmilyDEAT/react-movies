// Time convert
const timeConvert = (n) => {
  const hours = Math.floor(n / 60);
  const minutes = n - 60 * hours;
  const prettyMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}h${prettyMinutes}`;
};

// Date convert
const dateConvert = (s) => {
  const day = s[8] + s[9];
  const month = s[5] + s[6];
  const year = s[0] + s[1] + s[2] + s[3];
  return `${day}/${month}/${year}`;
};

// Rating convert
const ratingConvert = (n) => {
  return Math.round(n / 2);
};

export { timeConvert, dateConvert, ratingConvert };
