import React from 'react';
import { connect } from 'react-redux';
import Lobby from '../components/Lobby';
import { createGame } from '../actions/lobbyActions';
import PropTypes from 'prop-types';

const URL = 'http://localhost:8080/game/';

class LobbyContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(createGame());
  }

  componentDidUpdate() {
    if(this.props.canJoinGame)
      this.props.history.push('/game/'+ this.props.gameId);
  }

  render() {
    return <Lobby link={URL + this.props.gameId} />;
  }
}

LobbyContainer.propTypes = {
  dispatch: PropTypes.func,
  gameId: PropTypes.string,
  canJoinGame: PropTypes.bool,
  history: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    gameId: state.lobby.gameId,
    canJoinGame: state.lobby.canJoinGame,
  };
};

export default connect(mapStateToProps)(LobbyContainer);