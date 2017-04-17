import React from 'react';
import PropTypes from 'prop-types';

const EmptyCell = ({ onCLick }) => (
  <div className='cell' onClick={onCLick}></div>
);

EmptyCell.propTypes = {
  onCLick: PropTypes.func,
};

export default EmptyCell;