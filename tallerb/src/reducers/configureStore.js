import React from 'react';
import {combineReducers} from 'redux';
import {filter} from './filters';
import {clients} from './clients';
import {messages} from './messages';
import {createStore} from 'redux';




export const reducers = combineReducers({
    filter,
    clients,
    messages
});

export const store = createStore(reducers);

console.log('State:',store.getState());