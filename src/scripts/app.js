import ReactDOM from 'react-dom';
import React from 'react';
import WelcomeMsg from './components/welcomeMsg';

require('../styles/base.scss');

ReactDOM.render(
  <WelcomeMsg />, document.getElementById('content')
);
