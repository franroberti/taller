import {combineReducers} from 'redux';
import {messages} from './messages';
import {clientsForm} from "./clientsForm";
import {createStore} from 'redux';




export const reducers = combineReducers({
    messages,
    clientsForm
});

export const store = createStore(reducers);

console.log('State:',store.getState());




