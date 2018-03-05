import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Home from './client/pages/home';
import About from './client/pages/about';
// import logger from 'winston';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

const Test = () => (
  <div>
    TESTTEST
  </div>
);
export default App;
