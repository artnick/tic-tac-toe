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
            The game is created.<br/>
            Share a link below with your friend so that he can join the game.<br/>
            Once he enters the game you will automatically join.
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