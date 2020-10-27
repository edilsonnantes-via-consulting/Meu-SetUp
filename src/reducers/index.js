import userReducer from './userReducer';
import {combineReducers} from 'redux';
import configReducer from './configReducer';
import indexReducer from './indexReducer';

export default combineReducers ({
    user: userReducer,
    config: configReducer,
    index: indexReducer
});