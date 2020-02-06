import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharacterQuote } from '../../services/callApi.js';

export const Detail = ({ match }) => {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharacterQuote(match.params.character)
      .then(character => setCharacter(character[0]));
  }, []);

  return (
    <div> 
      <img src={character[0].image} />
      <p>{character.quote}</p>
      <p>{character.character}</p>
    </div>
  );
};


Detail.propTypes = {
  character: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
};
