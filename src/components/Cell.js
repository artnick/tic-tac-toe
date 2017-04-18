import React from 'react';
import PropTypes from 'prop-types';
import { X, O, EMPTY } from '../constants/gameConstants';

const Cell = ({ type, onCLick }) => {
  switch (type) {
    case X:
      return (
        <div className='cell'>
          <svg className="cross" role="img" viewBox="0 0 100 100">
            <path d="M25,25L75,75"/>
            <path d="M75,25L25,75" className="delay-line" />
          </svg>
        </div>
      );
    case O:
      return (
        <div className='cell'>
          <svg className="circle" role="img" viewBox="0 0 100 100" >
            <path d="M50,50m-25,0a25,25 0 1,0 50,0a25,25 0 1,0 -50,0"></path>
          </svg>
        </div>
      );
    case EMPTY:
    default:
      return <div className='cell' onClick={onCLick}></div>;
  }
};

Cell.propTypes = {
  type: PropTypes.number,
  onCLick: PropTypes.func,
};

export default Cell;