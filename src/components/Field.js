import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Field = ({ field=[] }) => (
  <table className='field'>
    <tbody>
      <tr>    
        {field.slice(0,3).map((cell, index) => 
          <Cell key={index} type={cell}/>
        )}
      </tr>
      <tr>    
        {field.slice(3,6).map((cell, index) => 
          <Cell key={index} type={cell}/>
        )}
      </tr>
      <tr>    
        {field.slice(6).map((cell, index) => 
          <Cell key={index} type={cell}/>
        )}
      </tr>
    </tbody>
  </table>
);

Field.propTypes = {
  field: PropTypes.array,
};

export default Field;