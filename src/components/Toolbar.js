import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ onRestart }) => (
  <div className="toolbar btn-group">
    <a href="/" className="btn btn-default">Create new game</a>
    <button type="button" className="btn btn-default" onClick={onRestart}>Restart</button>
  </div>
);

Toolbar.propTypes = {
  onRestart: PropTypes.func,
};

export default Toolbar;