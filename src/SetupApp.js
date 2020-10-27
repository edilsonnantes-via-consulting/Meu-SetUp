import React from 'react';
import Router from './Router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'remote-redux-devtools';
import reduxThunk from 'redux-thunk';

const enhance = composeWithDevTools({
    realtime: true,
    host: 'localhost',
    port: 8000
})
const Store = createStore(rootReducer, enhance(applyMiddleware(reduxThunk)))


const SetupApp = prop => (
    <Provider store ={Store}>
        <Router />
    </Provider>
)


export default SetupApp;