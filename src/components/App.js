import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LobbyContainer from '../containers/LobbyContainer';

const App = () => (
  <Router>
    <div className='app container'>
      <Route exact path="/" component={LobbyContainer}/>
    </div>
  </Router>
);

export default App;
