import React from 'react';
import PropTypes from 'prop-types';
import LinkToGame from './LinkToGame';

const Lobby = ({ link }) => (
  <div className="panel panel-default lobby">
    <div className="panel-body">
      <h1>Tic-tac-toe</h1>
      {!link ?
        <span>Creating game...</span> :
        <div>
          <span>
            Share link below with your friend to allow connect to game.<br/>
            You will be connected to game automatically when your friend have entered to game.
          </span>
          <LinkToGame link={link}/>
        </div>
      }
    </div>
  </div>
);

Lobby.propTypes = {
  link: PropTypes.string,
};

export default Lobby;