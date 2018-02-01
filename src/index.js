// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './Root';

const store = configureStore();

window.store = store;

render(
  <Root store={store} />,
  document.getElementById('react-root')
);