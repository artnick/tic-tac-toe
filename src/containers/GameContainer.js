import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { connectToGame, restartRequest, move } from '../actions/gameActions';
import Game from '../components/Game';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //try to connect if not connected yet (when connected field is not empty)
    if(this.props.field.length == 0)
      this.props.connect(this.props.match.params.id);
  }

  render() {
    return <Game {...this.props}/>;
  }
}

GameContainer.propTypes = {
  connect: PropTypes.func,
  match: PropTypes.object,
  field: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    field: state.game.field,
    info: state.game.info,
    canMove: state.game.canMove,
    line: state.game.line,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    move: (cell) => {
      dispatch(move(cell));
    },
    connect: (gameId) => {
      dispatch(connectToGame(gameId));
    },
    restart: () => {
      dispatch(restartRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);