import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import authReducer from './authReducer';


let reducers = combineReducers({
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;