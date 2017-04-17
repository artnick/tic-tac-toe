import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { connectToGame, move } from '../actions/gameActions';
import Game from '../components/Game';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.connect(this.props.match.params.id);
    //this.props.history.push('/game/');
  }

  render() {
    return <Game {...this.props}/>;
  }
}

GameContainer.propTypes = {
  connect: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    field: state.game.field,
    info: state.game.info,
    canMove: state.game.canMove,
    player: state.game.player,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);