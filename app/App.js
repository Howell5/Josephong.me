import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Home from './client/pages/home';
import About from './client/pages/about';
require('./client/public/favicon.ico');
// import logger from 'winston';

const App = store => (
  // <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
  // </Provider>
);

export default App;
