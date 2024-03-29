import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {render} from 'react-dom';
import App from './components/App';
import './index.css';

render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>
    , document.getElementById('root'));