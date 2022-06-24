import { combineReducers, createStore, applyMiddleware } from 'redux';

import { employeeReducer } from './reducers';

import thunk from 'redux-thunk';

export default createStore(
    combineReducers({
        employee : employeeReducer
    }),
    applyMiddleware(thunk)
)