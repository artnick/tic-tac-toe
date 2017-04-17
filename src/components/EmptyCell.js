import React from 'react';
import PropTypes from 'prop-types';

const EmptyCell = ({ onCLick }) => (
  <td className='empty-cell' onClick={onCLick}></td>
);

EmptyCell.propTypes = {
  onCLick: PropTypes.func,
};

export default EmptyCell;