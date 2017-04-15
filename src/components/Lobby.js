import React from 'react';
import PropTypes from 'prop-types';

const Lobby = ({ link }) => (
  <div className='lobby jumbotron'>
    <h1>Tic-tac-toe</h1>
    { !link ?
      <span>Creating game...</span> :
      <div className='form-inline'>
        <span>
          Share link below with your friend to allow connect to game. 
          You will be connected to game automatically when your friend have entered to game
        </span><br/>
        <input 
          id='linkField'
          className='form-control'
          type='text'
          readOnly='true'
          value={link}
          onFocus={(event) => {
            event.target.select();
            document.execCommand('copy');
          }}
        />
        <label htmlFor='linkField' className='copy-btn'>copy</label>
      </div>
    }
  </div>
);

Lobby.propTypes = {
  link: PropTypes.string,
};

export default Lobby;