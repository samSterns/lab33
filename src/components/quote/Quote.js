import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Quote = ({ text, character, image }) => {
  return (
    <div> 
      <Link to={`/${character}`}>
        <img src={image} />
      </Link> 
      <p>{text}</p>
      <p>{character}</p>
    </div>
  );
};

Quote.propTypes = {
  character: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
};
