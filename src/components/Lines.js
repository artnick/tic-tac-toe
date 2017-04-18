import React from 'react';
import PropTypes from 'prop-types';

const lines = [
  'M10,50L290,50',
  'M10,150L290,150',
  'M10,150L290,150',

  'M50,10L50,290',
  'M150,10L150,290',
  'M250,10L250,290',

  'M10,10L290,290',
  'M290,10L10,290',
];

const Lines = ({ line = -1 }) => {
  console.log(line);
  return line != -1? 
    <div className="line">
      <svg role="img" viewBox="0 0 300 300">
        <path d={lines[line]}/>
      </svg>
    </div> :
    null
  ;
};

Lines.propTypes = {
  line: PropTypes.number,
};

export default Lines;