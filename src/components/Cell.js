import React from 'react';
import PropTypes from 'prop-types';
import EmptyCell from './EmptyCell';

const Cell = ({ type, onCLick }) => {
  switch (type) {
    case 2:
      return <td>X</td>;
    case 1:
      return <td>O</td>;
    case 0:
      return <EmptyCell/>;
    default:
      return <EmptyCell/>;
  }
};

Cell.propTypes = {
  type: PropTypes.number,
  onCLick: PropTypes.func,
};

export default Cell;