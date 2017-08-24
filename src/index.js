import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App todos={[
    { task: 'do stuff' },
    { task: 'do other stuff' }
  ]} />,
  document.getElementById('root')
);
