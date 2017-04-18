import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ type, onCLick }) => {
  switch (type) {
    case 2:
      return <div className='cell'>
      <svg className="cross" role="img" viewBox="0 0 128 128">
        <path d="M16,16L112,112" stroke="#000000"/>
        <path className="odd" d="M112,16L16,112"/>
      </svg>
    </div>;
    case 1:
      return <div className='cell'>
        <svg className="circle" role="img" viewBox="0 0 128 128" >
          <path d="M64,16A48,48 0 1,0 64,112A48,48 0 1,0 64,16"></path>
        </svg>
      </div>;
    case 0:
    default:
      return <div className='cell' onClick={onCLick}></div>;
  }
};

Cell.propTypes = {
  type: PropTypes.number,
  onCLick: PropTypes.func,
};

export default Cell;