export const getAllQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then((res) => {
      return res.json();
    });
};

export const getCharacterQuote = (character) => {
  return fetch(`http://futuramaapi.herokuapp.com/api/characters/${character}/1`)
    .then((res) => {
      return res.json();
    });
};
