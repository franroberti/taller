import {combineReducers,applyMiddleware} from 'redux';
import {messages} from './messages';
import {clients} from "./clients";
import {createStore} from 'redux';
import thunk from 'redux-thunk';




export const reducers = combineReducers({
    messages,clients
});

export const store = createStore(reducers, applyMiddleware(thunk));





