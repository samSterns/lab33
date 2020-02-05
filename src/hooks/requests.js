import { useState, useEffect } from 'react';
import { getAllQuotes } from '../services/callApi.js';

const useCallApi = () => {

  const [quote, setQuote] = useState([]);


  useEffect(() => {
    getAllQuotes()
      .then(quote => setQuote(quote));
  }, []);

  return quote;

};

export default useCallApi;
