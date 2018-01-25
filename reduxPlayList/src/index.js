import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware} from 'redux';

import {Provider} from 'react-redux';
import App from './App.js';
import thunk from 'redux-thunk';
import reducer from './reducer';
let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.getElementById('root')
);
