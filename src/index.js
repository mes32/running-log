import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

import './index.css';
import App from './components/App/App';

// Configure middleware
const sagaMiddleware = createSagaMiddleware();
const middlewareList = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] :
    [sagaMiddleware];

// Create the redux store
const store = createStore(rootReducer, applyMiddleware(...middlewareList));

// Run the root saga
sagaMiddleware.run(rootSaga);

// Render the appliation
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
