import {combineReducers} from 'redux';
import {messages} from './messages';
import {createStore} from 'redux';




export const reducers = combineReducers({
    messages
});

export const store = createStore(reducers);

console.log('State:',store.getState());




