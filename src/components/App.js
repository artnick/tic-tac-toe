import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LobbyContainer from '../containers/LobbyContainer';
import GameContainer from '../containers/GameContainer';

const App = () => (
  <Router>
    <div className='app container'>
      <Route exact path="/" component={LobbyContainer}/>
      <Route path="/game/:id" component={GameContainer}/>
    </div>
  </Router>
);

export default App;
