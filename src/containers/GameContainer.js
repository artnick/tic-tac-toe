import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { connectToGame } from '../actions/gameActions';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(connectToGame(this.props.match.params.id));
    //this.props.history.push('/game/');
  }

  render() {
    return <div>Game</div>;
  }
}

GameContainer.propTypes = {
  dispatch: PropTypes.func,
  link: PropTypes.string,
  match: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    field: state.game.field,
  };
};

export default connect(mapStateToProps)(GameContainer);