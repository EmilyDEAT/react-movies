// Get Movie Genre
const getGenre = (s) => {
  let idGenre = 0;
  if (s === "action") {
    idGenre = 28;
  } else if (s === "aventure") {
    idGenre = 12;
  } else if (s === "comedie") {
    idGenre = 35;
  } else if (s === "drame") {
    idGenre = 18;
  } else if (s === "familial") {
    idGenre = 10751;
  } else if (s === "fantastique") {
    idGenre = 14;
  }
  return idGenre;
};

export default getGenre;
