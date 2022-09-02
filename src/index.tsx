import React, {Fragment } from 'react';
import createRoot from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domContainer = document.querySelector('#root');

createRoot.render(
  <Fragment>
    <App />
  </Fragment>,
  domContainer
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
