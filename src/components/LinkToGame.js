import React from 'react';
import PropTypes from 'prop-types';

const LinkToGame = ({ link }) => (
  <div className='link input-group'>
    <input 
      id='link'
      className='form-control'
      type='text'
      readOnly='true'
      value={link}
      onFocus={(event) => {
        event.target.select();
        document.execCommand('copy');
      }}
    />
    <label htmlFor='link' className='copy-btn input-group-addon'>copy</label>
  </div>
);

LinkToGame.propTypes = {
  link: PropTypes.string,
};

export default LinkToGame;