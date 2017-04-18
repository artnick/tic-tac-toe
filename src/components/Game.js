import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Field from './Field';
import Toolbar from './Toolbar';

const Game = ({ info, field, move, line, restart }) => (
  <div className="panel panel-default lobby">
    <div className="panel-body">
      <Info text={info}/>
      <Field field={field} onMove={move} line={line}/>
      <Toolbar onRestart={restart}/>
    </div>
  </div>
);

Game.propTypes = {
  info: PropTypes.string,
  field: PropTypes.array,
  line: PropTypes.number,
  move: PropTypes.func,
  restart: PropTypes.func,
};

export default Game;