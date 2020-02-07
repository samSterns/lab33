import React from 'react';
import PropTypes from 'prop-types';
import { Quote } from '../quote/Quote.js';
import usePaging from '../../hooks/use-paging.js';

const QuoteList = ({ quote }) => {
  const quotesArray = quote.map(quote => {
    return <Quote 
      key={quote.quote} 
      text={quote.quote} 
      character={quote.character} 
      image={quote.image} />;
  });

  return (
    <>
      <button onClick={usePaging}>previous</button>
      <button onClick={usePaging}>next</button>
      <section>
        {quotesArray}
      </section>
    </>
  );
};

QuoteList.propTypes = {
  quote: PropTypes.array

};

export default QuoteList;
