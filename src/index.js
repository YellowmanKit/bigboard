import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Database from './Database';
import store from './redux/store';

import { injectGlobal } from 'styled-components';
import adobestdb from 'resources/fonts/adobestdb.otf';
injectGlobal`
  @font-face {
    font-family: 'adobestdb';
    src: url(${adobestdb}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

ReactDOM.render(  <Provider store={store}><App db={new Database()}/></Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
