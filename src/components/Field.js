import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Field = ({ field=[], onMove }) => (
  <div className='field'>
    <div className='row'>
      {field.map((cell, index) => 
        <Cell key={index} type={cell} onCLick={()=>onMove(index)}/>
      )}
    </div>
  </div>
);

Field.propTypes = {
  field: PropTypes.array,
  onMove: PropTypes.func,
};

export default Field;