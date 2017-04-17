import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Field from './Field';

const Game = ({ info, field }) => (
  <div className="panel panel-default lobby">
    <div className="panel-body">
      <Info text={info}/>
      <Field field={field} />
    </div>
  </div>
);

Game.propTypes = {
  info: PropTypes.string,
  field: PropTypes.array,
};

export default Game;