export const getAllQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then((res) => {
      return res.json();
    });
};
