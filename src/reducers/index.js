import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedReducer from './isLogged';

const allReducers = combineReducers({ counter: counterReducer, logger: isLoggedReducer })


export default allReducers;