import React from 'react';
import PropTypes from 'prop-types';

const Lobby = ({ link }) => (
  <div className='info'>
    Hello {link}
  </div>
);

Lobby.propTypes = {
  link: PropTypes.string,
};

export default Lobby;