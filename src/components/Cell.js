import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ type, onCLick }) => {
  switch (type) {
    case 2:
      return <div className='cell'>X</div>;
    case 1:
      return <div className='cell'>O</div>;
    case 0:
      return <div className='cell' onClick={onCLick}></div>;
    default:
      return <div className='cell' onClick={onCLick}></div>;
  }
};

Cell.propTypes = {
  type: PropTypes.number,
  onCLick: PropTypes.func,
};

export default Cell;