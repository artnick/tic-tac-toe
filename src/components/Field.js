import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import Lines from './Lines';

const Field = ({ field=[], onMove, line }) => (
  <div className='field'>
    <div className='row'>
      {field.map((cell, index) => 
        <Cell key={index} type={cell} onCLick={()=>onMove(index)}/>
      )}
    </div>
    <Lines line={line}/>
  </div>
);

Field.propTypes = {
  field: PropTypes.array,
  line: PropTypes.number,
  onMove: PropTypes.func,
};

export default Field;