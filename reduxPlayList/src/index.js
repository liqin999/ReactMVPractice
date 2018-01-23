import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import {connect, Provider} from 'react-redux';
import App from './App.js';

import reducer from './reducer';
let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.getElementById('root')
);
