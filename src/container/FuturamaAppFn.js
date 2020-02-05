import React, { useState } from 'react';
import QuoteList from '../components/list/List.js';
import { getAllQuotes } from '../services/callApi.js';
import useCallApi from '../hooks/requests.js';


const FuturamaAppFn = () => {

  const [quote, setQuote] = useState([]);

  useCallApi();

  const fetchQuote = () => {
    getAllQuotes()
      .then(quote => setQuote(quote));
  };

  return (
    <>
      <button onClick={fetchQuote}>Get New Quotes</button>
      <QuoteList quote={quote} />
    </>
  );
    
};

export default FuturamaAppFn;
