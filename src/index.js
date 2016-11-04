import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';

const rootEl = document.getElementById('main');
const render = () => {
  // See here for explanation of why this require() is needed:
  // https://github.com/reactjs/redux/pull/1455/files#r54380102
  const Main = require('./components/Main').default; // eslint-disable-line global-require

  ReactDOM.render(
    <Main />,
    rootEl,
  );
};

if (module.hot) {
  module.hot.accept('./components/Main', () => {
    render();
  });
}

render();
