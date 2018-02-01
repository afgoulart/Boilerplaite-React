import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContainer from './containers/AppContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:route?" component={AppContainer} />
    </Router>
  </Provider>
);

export default Root;