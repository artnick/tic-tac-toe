import React from 'react';
import { connect } from 'react-redux';
import Lobby from '../components/Lobby';
import { createGame } from '../actions/lobbyActions';
import PropTypes from 'prop-types';

class LobbyContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(createGame());
    //this.props.history.push('/game/');
  }

  render() {
    return <Lobby link={this.props.link} />;
  }
}

LobbyContainer.propTypes = {
  dispatch: PropTypes.func,
  link: PropTypes.string,
  history: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    link: state.lobby.link,
  };
};

export default connect(mapStateToProps)(LobbyContainer);